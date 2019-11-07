from core.models import User, UserManager, Agent, Error
from django.test import TestCase

class ModelsTestCase(TestCase):
    def setUp(self):
        user = User.objects.create(name = "maira", email = "maira@hotmail.com", is_active = True, is_staff = False)
        user2 = User.objects.create(name = "clara", email = "clara@hotmail", is_active = True, is_staff = False)
        agent = Agent.objects.create(name = "leonardo", id = 100, user = user, address = "192.168.1.1", status = True, env = "prod", version = "1.1.1")
        error= Error.objects.create(title = "Error1" ,user = user, agent = agent, log = "logTest", level = "WARNING", sources = "ERROR", description = "test description", is_active = True)

    def test_user(self):
        user = User.objects.get(name = "maira")
        self.assertEqual(user.email, "maira@hotmail.com")

    def test_agent(self):
        agent = Agent.objects.get(name = "leonardo")
        self.assertEqual(agent.user.email, "maira@hotmail.com")
        self.assertEqual(agent.address, "192.168.1.1")
        self.assertEqual(agent.env, "prod")
        self.assertEqual(agent.version, "1.1.1")
        self.assertEqual(agent.status, True)

    def test_error(self):
        error = Error.objects.get(level = "WARNING")
        self.assertEqual(error.level, "WARNING")
        self.assertEqual(error.sources, "ERROR")
        self.assertEqual(error.description, "test description")
        self.assertEqual(error.is_active, True)
    
    def test_user_manager(self):
        user2 = User.objects.get(name = "clara")
        self.assertRaisesRegex(ValueError, 'Users must have an email address')
