from django.contrib import admin
from .models import Error
from .models import Agent

admin.site.register(Error)
admin.site.register(Agent)