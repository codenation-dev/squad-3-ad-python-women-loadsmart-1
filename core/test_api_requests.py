from django.test import Client
import unittest
#from django.test import TestCase


class ApiTestCase(unittest.TestCase):
    def setUp(self):
        self.client = Client()

    def test_api_agent_request(self):
        response = self.client.get('/api/agent/')
        self.assertEqual(response.status_code, 200)
