from django.contrib.auth.views import LoginView
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import TemplateView, CreateView

from main.forms import *


class Test(TemplateView):
    template_name = 'main/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form1'] = RegisterUserForm()
        return context


class RegisterUser(CreateView):
    form_class = RegisterUserForm
    template_name = 'main/index.html'
    success_url = reverse_lazy('main')
    def post(self, request, *args, **kwargs):
        reg_form=RegisterUserForm(request.POST)
        # print(request.POST.cleaned_data)
        print(request.POST)

        if reg_form.is_valid():
            print(reg_form.cleaned_data)
            # user=reg_form.save(commit=False)
            # form.instance.username=form.instance.first_name[0]+form.instance.sur_name[0]
            # print(request.cleaned_data)
            reg_form.save()
            return redirect(reverse_lazy('main'))
        else:
            print('some error')
            return redirect(reverse_lazy('main'))


class LoginUser(LoginView):
    form_class = LoginUserForm
    # template_name = 'testapp/login.html'

    def get_success_url(self):
        return redirect(reverse_lazy('main'))