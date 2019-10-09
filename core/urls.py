from django.urls import include, path
from . import views

urlpatterns = [
    path('central', views.ListErros.as_view()),
    path('central/<int:pk>/', views.DetailErro.as_view()),
    #The DRF provide  endpoints for the users (login/logout/token/etc)
]
