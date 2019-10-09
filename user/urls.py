from django.urls import path, include
<<<<<<< HEAD
=======

>>>>>>> a837608f3b5324b28533377aa045a1afa531e965
from user import views


app_name = 'user'

urlpatterns = [
    path('register/', views.CreateUserView.as_view(), name='create'),
<<<<<<< HEAD
    path('me/', views.ManageUserView.as_view(), name='me'),
    path('', include('rest_auth.urls')),
    # provides login / logout /  resetpass  etc 
    # https://django-rest-auth.readthedocs.io/en/latest/configuration.html
=======
    path('login/', views.CreateTokenView.as_view(), name='token'),
    path('me/', views.ManageUserView.as_view(), name='me'),
    path('auth/', include('rest_auth.urls')),
>>>>>>> a837608f3b5324b28533377aa045a1afa531e965

]