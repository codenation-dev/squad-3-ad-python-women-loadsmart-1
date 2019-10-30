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
       )
        model = models.Errors

class ErrorsCreateSerializer(serializers.ModelSerializer):
    '''return a basic information about the error whitout details'''

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
      class Meta:
        model = models.Errors
        fields = '__all__'