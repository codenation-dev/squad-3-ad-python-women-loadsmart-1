from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
                                        PermissionsMixin
from django.core.validators import validate_ipv4_address
from django.db.models import Count
from django.http import JsonResponse

class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fields):
        """Creates and saves a new customized user
        no need username"""
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """Creates and saves a new super user"""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model that supports using email instead of username"""
    
    USERNAME_FIELD = 'email' # defautl is username
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    # methods from User Manager
    objects = UserManager()
    
    def update(self, instance, validated_data):
        """Update a user, setting the password correctly and return it"""
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

class Agent(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.PROTECT, null=True)
    address = models.GenericIPAddressField(validators=[validate_ipv4_address], null=True)
    status = models.BooleanField(default=False)
    env = models.CharField(max_length=20)
    version = models.CharField(max_length=5)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']

        
class Error(models.Model):
    """Model representation Title, log, description, 
    level, source, active(flag), foreingkey(user)."""


    ERROR='ERROR'
    DEBUG='DEBUG'
    WARNING='WARNING'
    LEVEL= [
        (ERROR,('ERROR')),
        (DEBUG,('DEBUG')),
        (WARNING,('WARNING')),
    ]
    
    DEVELOPMENT='DEVELOPMENT'
    TESTING='TESTING'
    PRODUCTION='PRODUCTION'
    SOURCE=[
        (DEVELOPMENT,('DEVELOPMENT')),
        (TESTING,('TESTING')),
        (PRODUCTION,('PRODUCTION')),
    ]

    title = models.CharField(max_length=200)
    log = models.CharField(max_length=200)
    level = models.CharField(
        max_length=32,
        choices=LEVEL,
        default=ERROR
    )
  
    sources = models.CharField(
        max_length=32,
        choices=SOURCE,
    )
    description = models.TextField()
    user = models.ForeignKey('core.User', blank=True, null=True, on_delete=models.CASCADE)

    is_active = models.BooleanField(default=True)
    created = models.DateTimeField (default= timezone.now)
    agent = models.ForeignKey(Agent, on_delete=models.PROTECT)
    @property
    def error_counting(Error):

        q = Error.objects.annotate(agent_count=Count(self.agent))
        return q


    def __str__(self):
        """A string representation of the model."""
        return self.title


