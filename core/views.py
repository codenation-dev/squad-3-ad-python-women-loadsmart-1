
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
    serializer_class = serializers.ErrorsSerializer

class ListErros(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)

    """
    get:
    Return a list of all existing ."""

class createError(mixins.CreateModelMixin,
                 generics.GenericAPIView):
    
    permission_classes = (IsAuthenticated,)
    queryset = models.Errors.objects.all()
    serializer_class = serializers.ErrorsDetailSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


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

