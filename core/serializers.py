from rest_framework import serializers
from core import models
from . models import Errors
from rest_framework.views import APIView




class ErrorsSerializer(serializers.ModelSerializer):
    '''return a basic information about the error whitout details'''
    class Meta:
        fields = (
            'sources',
            'title',
            'log',
            'level',
       )
        model = models.Errors


class ErrorsDetailSerializer(serializers.ModelSerializer):
      class Meta:
        model = models.Errors
        fields = '__all__'