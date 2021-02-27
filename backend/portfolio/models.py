from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    profile_picture = models.ImageField(upload_to='profile_pictures')

    def _str_(self):
        return (self.user.first_name + self.user.last_name)

class Project(models.Model):
    title = models.TextField(max_length=500)
    from_date = models.DateField()
    to_date = models.DateField()
    description = models.TextField()

    def _str_(self):
        return self.title

class Articles(models.Model):
    title = models.CharField(max_length=50)
    date = models.DateField()
    content = models.TextField()

    def _str_(self):
        return self.title