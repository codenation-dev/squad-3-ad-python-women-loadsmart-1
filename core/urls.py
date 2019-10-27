from django.urls import include, path
from . import views

urlpatterns = [
    path('central', views.ListErrors.as_view()),
    path('central/<int:pk>/', views.DetailError.as_view()),
    path('central/create', views.createError.as_view()),
    #The DRF provide  endpoints for the users (login/logout/token/etc)
]
