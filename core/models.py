from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
                                        PermissionsMixin

<<<<<<< HEAD
=======
# Create your models here.
>>>>>>> a837608f3b5324b28533377aa045a1afa531e965

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
<<<<<<< HEAD
    """Custom user model that supports using email instead of username"""
=======
    """Custom user model that suppors using email instead of username"""
>>>>>>> a837608f3b5324b28533377aa045a1afa531e965
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

<<<<<<< HEAD
    USERNAME_FIELD = 'email' # defautl is username
=======
    USERNAME_FIELD = 'email'
>>>>>>> a837608f3b5324b28533377aa045a1afa531e965
    
    def update(self, instance, validated_data):
        """Update a user, setting the password correctly and return it"""
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)
<<<<<<< HEAD


=======
>>>>>>> a837608f3b5324b28533377aa045a1afa531e965
class Erros(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()


    def __str__(self):
        """A string representation of the model."""
        return self.title