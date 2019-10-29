from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse 

from rest_framework.test import APIClient
from rest_framework import status


def create_user(**params):
    """Function that help to create new user"""
    return get_user_model().objects.create_user(**params)

class PublicUserApiTests(TestCase):
    """Test the users API (public)"""


    def setUp(self):
        self.client = APIClient()

    def create_user(payload):
       res = self.client.post('http://127.0.0.1:8000/users/register/', payload)
       user = get_user_model().objects.get(**res.data)
       
    def test_create_valid_user_success(self):
        """Test creating using with a valid payload is successful
        Read more about django statuscodes:
        https://www.django-rest-framework.org/api-guide/status-codes/"""
        payload = {
            'email': 'test@test-api.com',
            'password': 'testpass',
            'name': 'name',
        }
        res = self.client.post('http://127.0.0.1:8000/users/register/', payload)

        self.assertEqual(res.status_code, status.HTTP_201_CREATED)
        user = get_user_model().objects.get(**res.data)
        self.assertTrue(
            user.check_password(payload['password'])
        )
        self.assertNotIn('password', res.data)

    def test_user_exists(self):
        """Test creating a user that already exists fails"""

        payload = {'email': 'test2@test-api.com','name':'test', 'password': 'testpass'}
        #Should not pass - if user already exist.

        self.client.post('http://127.0.0.1:8000/users/register/', payload)
        res = self.client.post('http://127.0.0.1:8000/users/register/', payload)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)

    def test_password_too_short(self):
        """Test that password must be more than 6 characters"""
        payload = {'email': 'test@test-api.com', 'password': 'pw'}
        res = self.client.post('http://127.0.0.1:8000/users/register/',payload)

        self.assertEqual(res.status_code, status.HTTP_400_BAD_REQUEST)
        user_exists = get_user_model().objects.filter(
            email=payload['email']
        ).exists()
        self.assertFalse(user_exists)



    def test_create_token_missing_field(self):
        """Test that email and password are required"""
        
        payload = {'email': 'test2@test-api.com', 'password': 'wrong'}
        res = self.client.post('http://127.0.0.1:8000/api/token/',payload )
        self.assertIn('detail', res.data)
        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_token_all_field(self):
        """Test that email and password are required"""
        #create user and verify if login with the same
        #email and password returns the key (token)

        payload = {'email': 'test2@test-api.com', 'password': 'testpass'}
        get_user_model().objects.create_user(**payload)
        res = self.client.post('http://127.0.0.1:8000/api/token/',payload)
        self.assertIn('refresh', res.data)
        