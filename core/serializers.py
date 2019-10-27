from rest_framework import serializers
from core import models
from . models import Errors
from rest_framework.views import APIView




class ErrorsSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'title',
       )
        model = models.Errors

class ErrorsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'level',
            'description',
            'detail',
            'date_log',
            'sources',
            'status_active',
            'user', 
       )
        model = models.Errors
