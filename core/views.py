
from django.shortcuts import render
from rest_framework import generics
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from core import models
from core import serializers
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class ListErrors(mixins.ListModelMixin,
                 generics.GenericAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = models.Errors.objects.all()

    """ 
    List all erros only get is avaiable
    """

    filterset_fields = ['sources']

    def get(self, request, format=None):
        erros = models.Errors.objects.all()
        serializer = serializers.ErrorsSerializer(erros, many=True)
        return Response(serializer.data)
    

class createError(mixins.CreateModelMixin,
                 generics.GenericAPIView):
    
    permission_classes = (IsAuthenticated,)
    queryset = models.Errors.objects.all()
    serializer_class = serializers.ErrorsDetailSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class FilterErrors(mixins.CreateModelMixin,
                 generics.GenericAPIView):

    
    permission_classes = (IsAuthenticated,)
    queryset = models.Errors.objects.filter(sources='PRODUCTION')

    """ 
    List all erros by filtering field sources
    """

    def get(self, request, format=None):

        erros = models.Errors.objects.filter(sources='PRODUCTION')
        serializer = serializers.ErrorsSerializer(erros, many=True)
        return Response(serializer.data)


class DetailError(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)

    """
    get:
    Return a all fields of a selected "Erros".

    put:
    Update  Erro.

    delete: 
    """

    queryset = models.Errors.objects.all()
    serializer_class = serializers.ErrorsDetailSerializer



