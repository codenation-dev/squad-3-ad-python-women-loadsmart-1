
from django.shortcuts import render
from rest_framework import generics
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import filters
from django_filters import rest_framework as filtersfield
from django.db.models import Count
from core import models
from core import serializers
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets


class ListAgent(mixins.ListModelMixin, generics.GenericAPIView):
    '''Get : all Agents by user 
        Post : create a new Agent
    '''
    permission_classes = (IsAuthenticated,)
    queryset = models.Agent.objects.all()
    serializer_class = serializers.AgentSerializer
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)




class CreateAgent(mixins.CreateModelMixin,
                 generics.GenericAPIView):

    ''' 
    post:
        This allow client insert a new Agent  
        user = is_active'''
    
    permission_classes = (IsAuthenticated,)
    queryset = models.Agent.objects.all()
    serializer_class = serializers.AgentCreateSerializer
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class ListError(mixins.ListModelMixin,
                 generics.GenericAPIView):

    """ 
    get: 
        return a list of all active errors 
        
    filters: 
        SearchFilter => fields: 'sources', 'level'
        FilterSet => 'title', 'description' (using crysping forms)
   
    examples:
         /?sources=TESTING&level=WARNING
         /?search=keyword+anotherword
    ordering: by source, level and date
    """

    permission_classes = (IsAuthenticated,)
    queryset = models.Error.objects.filter(is_active=True)
    serializer_class = serializers.ErrorsSerializer

    filter_backends = [filters.SearchFilter,filters.OrderingFilter, filtersfield.DjangoFilterBackend,]

    search_fields = ['title', 'description']
    filterset_fields = ['sources', 'level']
    ordering_fields = ['sources', 'level','created']
    ordering = ['created'] #default order



    
    #this allow client make a search 
    #http://127.0.0.1:8000/central?search=keyword+anotherword
    #this allow client make a search 
    #http://127.0.0.1:8000/central/?sources=TESTING&level=WARNING

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    

class createError(mixins.CreateModelMixin,
                 generics.GenericAPIView):

    ''' 
    post:
        This allow client insert a new error data 
        user, is_active and date are hidden'''
    
    permission_classes = (IsAuthenticated,)
    queryset = models.Error.objects.all()
    serializer_class = serializers.ErrorsCreateSerializer
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class DetailError(generics.RetrieveUpdateDestroyAPIView):

    """
    get:
    Return all the fields from a especific error

    put:
    partial update some fields are declared as read only

    delete: 
    destroy object
    """
    permission_classes = (IsAuthenticated,)
    queryset = models.Error.objects.all()
    serializer_class = serializers.ErrorsDetailSerializer


class ErrorOcurrencesCountView(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
  
    queryset= models.Error.objects.all()

    #queryset = models.Error.objects.all()
    #filter_backends = [filters.SearchFilter,filters.OrderingFilter, filtersfield.DjangoFilterBackend,]
    #ordering = ['agent','level']
    
  
    serializer_class = serializers.CountingSerializer


