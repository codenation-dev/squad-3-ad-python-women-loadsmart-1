from django.urls import include, path
from . import views

urlpatterns = [
    path('central/', views.ListError.as_view()),
    path('central/<int:pk>/', views.DetailError.as_view()),
    path('central/create/', views.createError.as_view()),
    path('agent/',views.ListAgent.as_view()),
    path('agent/<int:pk>',views.DetailAgent.as_view()),
    path('agent/create/',views.CreateAgent.as_view()),
    path('agent/all/',views.ListAgentAll.as_view()),
    #path('api/env/',views.ListEnv.as_view()),






    #The DRF provide  endpoints for the users (login/logout/token/etc)
]
