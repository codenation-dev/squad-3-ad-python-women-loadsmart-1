from rest_framework import serializers
from core import models
from .models import Errors


class ErrorsSerializer(serializers.ModelSerializer):
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
