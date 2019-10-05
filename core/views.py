from django.shortcuts import render
from rest_framework import generics
from core import models
from core import serializers


class ListErros(generics.ListCreateAPIView):
    """
    get:
    Return a list of all existing .

    post:
    Create a new .
    """

    queryset = models.Erros.objects.all()
    serializer_class = serializers.ErrosSerializer


class DetailErro(generics.RetrieveUpdateDestroyAPIView):
    """
    get:
    Return a all fields of a selected "Erros".

    put:
    Update  Erro.

    delete: 
    """

    queryset = models.Erros.objects.all()
    serializer_class = serializers.ErrosSerializer