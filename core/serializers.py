from rest_framework import serializers
from core import models
from . models import Errors
from rest_framework.views import APIView
from user.serializers import UserSerializer



class ErrorsSerializer(serializers.ModelSerializer):
    '''return a basic information about the error whitout details'''
    class Meta:
        fields = (
            'id',
            'sources',
            'title',
            'log',
            'level',
            'is_active',
            'date'
       )
        model = models.Errors

class ErrorsCreateSerializer(serializers.ModelSerializer):
    '''Customized selializer to create a new error 
    hide user and set a current user. No need set date because by default
    use the time now'''

    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
      
        fields = (
            'sources',
            'description',
            'title',
            'log',
            'level',
            'user'
              
       )
        model = models.Errors




class ErrorsDetailSerializer(serializers.ModelSerializer):
    '''Return all the fields from a especific error'''
    
    class Meta:
        model = models.Errors
        fields = '__all__'