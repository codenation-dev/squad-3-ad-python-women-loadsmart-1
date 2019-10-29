from rest_framework import serializers
from core import models


class ErrosSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
            'user',
                     
       )
        model = models.Erros

    
