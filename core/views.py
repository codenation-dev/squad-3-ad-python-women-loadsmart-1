
from django.shortcuts import render
from rest_framework import generics
from core import models
from core import serializers


class ListErrors(generics.ListCreateAPIView):
    """
    get:
    Return a list of all existing .

    post:
    Create a new .
    """

    queryset = models.Errors.objects.all()
    serializer_class = serializers.ErrorsSerializer


class DetailError(generics.RetrieveUpdateDestroyAPIView):
    """
    get:
    Return a all fields of a selected "Erros".

    put:
    Update  Erro.

    delete: 
    """

    queryset = models.Errors.objects.all()
    serializer_class = serializers.ErrorsSerializer