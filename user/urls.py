from django.urls import path, include

from user import views


app_name = 'user'

urlpatterns = [
    path('register/', views.CreateUserView.as_view(), name='create'),
    path('login/', views.CreateTokenView.as_view(), name='token'),
    path('me/', views.ManageUserView.as_view(), name='me'),
    path('auth/', include('rest_auth.urls')),

]