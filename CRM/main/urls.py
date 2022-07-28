from django.contrib import admin
from django.urls import path, include

from main.views import *

urlpatterns = [
    path('', Test.as_view(), name='main'),
    path('reg/', RegisterUser.as_view(), name='reg'),
    path('log/', LoginUser.as_view(), name='log'),
]
