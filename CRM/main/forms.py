from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.forms import *
# from django import forms
from .models import *

class RegisterUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name', '']
        widgets = {
            'name': TextInput(attrs={'class': 'input', 'placeholder': 'Имя'}),
        }

class LoginUserForm(AuthenticationForm):
    class Meta:
        model = User
        fields = ['username',]
        # widgets={
        #
        # }


