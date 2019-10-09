from django.urls import path, include
from user import views


app_name = 'user'

urlpatterns = [
    path('register/', views.CreateUserView.as_view(), name='create'),
    path('me/', views.ManageUserView.as_view(), name='me'),
    path('', include('rest_auth.urls')),
    # provides login / logout /  resetpass  etc 
    # https://django-rest-auth.readthedocs.io/en/latest/configuration.html

]