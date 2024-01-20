from django.db import models
from django.contrib.auth.models import AbstractUser
# from ..phones.models import Phone

# Create your models here.
class User(AbstractUser):
  bio = models.TextField(max_length=200, blank=True, null=True)
  # owned_phones = models.one('phones', related_name='owners', blank=True)


