from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.forms import *

from .models import *

class RegisterUserForm(UserCreationForm):
    username = CharField(widget=TextInput(attrs={'class': 'input', 'placeholder': 'Логин'}))
    first_name = CharField(widget=TextInput(attrs={'class': 'input', 'placeholder': 'Имя'}))
    last_name = CharField(widget=TextInput(attrs={'class': 'input', 'placeholder': 'Фамилия'}))
    password1 = CharField(widget=PasswordInput(attrs={'class': 'input', 'placeholder': 'Пароль'}))
    password2 = CharField(widget=PasswordInput(attrs={'class': 'input', 'placeholder': 'Повторите пароль'}))
    class Meta:
        model = CustomUser
        fields = ['username', 'first_name', 'last_name',]


class LoginUserForm(AuthenticationForm):
    class Meta:
        model = CustomUser
        fields = ['username',]
        # widgets={
        #
        # }


