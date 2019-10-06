from django.urls import include, path
from . import views

urlpatterns = [
    path('central', views.ListErros.as_view()),
    path('central/<int:pk>/', views.DetailErro.as_view()),
    path('user/', include('rest_auth.urls')), 
    path('user/registration/', include('rest_auth.registration.urls')),
    #The DRF provide  endpoints for the users (login/logout/token/etc)
]
