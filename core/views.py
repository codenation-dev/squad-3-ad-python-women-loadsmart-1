
from django.shortcuts import render
from rest_framework import generics
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from core import models
from core import serializers

class ListErrors(mixins.ListModelMixin,
                 generics.GenericAPIView):
    queryset = models.Errors.objects.all()
    serializer_class = serializers.ErrorsSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

class createError(mixins.CreateModelMixin,
                 generics.GenericAPIView):
    queryset = models.Errors.objects.all()
    serializer_class = serializers.ErrorsDetailSerializer

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

    queryset = models.Errors.objects.all()
    serializer_class = serializers.ErrorsDetailSerializer

