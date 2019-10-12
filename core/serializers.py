from rest_framework import serializers
from core import models


class ErrorsSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
            'detail',
            'date_log',
            'sources',
            'status_is_active',
            'user', 
       )
        model = models.Errors
