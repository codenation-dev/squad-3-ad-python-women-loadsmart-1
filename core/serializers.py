from rest_framework import serializers
from core import models
from . models import Error, Agent
from rest_framework.views import APIView
from user.serializers import UserSerializer



class AgentSerializer(serializers.ModelSerializer):
    ''' Serializer for Agent objetcs'''
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.Agent
        fields = '__all__'
        read_only_fields = ('id',)



class AgentCreateSerializer(serializers.ModelSerializer):
    ''' Serializer for Agent objetcs'''
    
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = models.Agent
        fields = (
            'name',
            'address',
            'status',
            'env',
            'user',
            'version',

        )
        




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
            'created'
       )
        model = models.Error

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
            'user',
            'agent',
              
       )
        model = models.Error




class ErrorsDetailSerializer(serializers.ModelSerializer):
    '''Return all the fields from a especific error
    for update some fields are declared as read only'''
    
    user = serializers.SlugRelatedField(
        read_only=True,
        slug_field='name'
     )

     # show name instead of the related pk id
    class Meta:
        model = models.Error
        fields = '__all__'
        read_only_fields = ('user','created','log')        