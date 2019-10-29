from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
                                        PermissionsMixin


class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fields):
        """Creates and saves a new user"""
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

    

    objects = UserManager()
    
    def update(self, instance, validated_data):
        """Update a user, setting the password correctly and return it"""
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)


class Errors(models.Model):
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
    events = models.IntegerField(default=1)
    date = models.DateTimeField (default= timezone.now)
    


    def __str__(self):
        """A string representation of the model."""
        return self.title