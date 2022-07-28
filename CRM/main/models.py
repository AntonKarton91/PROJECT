from django.db import models

from django.contrib.auth.models import User, AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver


# Модель отделов
class Departments(models.Model):
    department_name = models.CharField(max_length=255)


# Модель должностей
class Stages(models.Model):
    stage_name = models.CharField(max_length=255)


# Модель пользователя
class CustomUser(AbstractUser):
    initials = models.CharField(max_length=3, blank=True)
    stage = models.ForeignKey(Stages, related_name='stages', on_delete=models.PROTECT, null=True, blank=True)
    department = models.ForeignKey(Departments, related_name='departments', on_delete=models.PROTECT, null=True, blank=True)

    def get_initials(self):
        self.initials = self.first_name[0].upper() + self.last_name[0].upper()

    def save(self, *args, **kwargs):
        self.get_initials()
        super().save(*args, **kwargs)


    def __str__(self):
        return self.initials

# class Mod(models.Model):
#     name = models.CharField(max_length=100)