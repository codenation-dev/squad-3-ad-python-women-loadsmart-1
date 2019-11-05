from django.urls import include, path
from . import views

urlpatterns = [
    path('central/', views.ListError.as_view()),
    path('central/<int:pk>/', views.DetailError.as_view()),
    path('central/create/', views.createError.as_view()),
    path('agent/',views.ListAgent.as_view()),
    path('agent/create/',views.CreateAgent.as_view()),
<<<<<<< HEAD
    path('central/counting/<int:pk>',views.ErrorOcurrencesCountView.as_view())
=======
    path('central/counting/',views.ErrorOcurrencesCountView.as_view())
>>>>>>> error-counting

    #The DRF provide  endpoints for the users (login/logout/token/etc)
]
