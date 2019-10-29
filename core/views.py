from django.shortcuts import render
from rest_framework import generics
from core import models
from core import serializers
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class ListErros(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)

    """
    get:
    Return a list of all existing .

    post:
    Create a new .
    """

    queryset = models.Erros.objects.all()
    serializer_class = serializers.ErrosSerializer


class DetailErro(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)

    """
    get:
    Return a all fields of a selected "Erros".

    put:
    Update  Erro.

    delete: 
    """

    queryset = models.Erros.objects.all()
    serializer_class = serializers.ErrosSerializer