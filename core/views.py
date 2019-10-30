
from django.shortcuts import render
from rest_framework import generics
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import filters
from django_filters import rest_framework as filtersfield


from core import models
from core import serializers
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated



class ListErrors(mixins.ListModelMixin,
                 generics.GenericAPIView):

    """ 
    get: 
        return a list of all active erros 
    filters: 
        SearchFilter => fields: 'sources', 'level'
        FilterSet => 'title', 'description' (using crysping forms)
   
        examples:
         /?sources=TESTING&level=WARNING
         /?search=keyword+anotherword
    ordering: by source, level and date
    """

    permission_classes = (IsAuthenticated,)
    queryset = models.Errors.objects.filter(is_active=True)
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
    queryset = models.Errors.objects.all()
    serializer_class = serializers.ErrorsCreateSerializer
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class DetailError(generics.RetrieveUpdateDestroyAPIView):

    """
    get:
    Return a all fields of a selected "Erros".

    put:
    Update  Erro.

    delete: 
    """
    permission_classes = (IsAuthenticated,)
    queryset = models.Errors.objects.all()
    serializer_class = serializers.ErrorsDetailSerializer

    

    


