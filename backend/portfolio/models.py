from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return (self.user.first_name + self.user.last_name)

class WorkExperience(models.Model):
    title = models.CharField(max_length=50)
    from_date = models.DateField()
    to_date = models.DateField()
    description = models.TextField()
    organization = models.CharField(max_length=100)

    def __str__(self):
        return self.title + ", " + self.organization

class Project(models.Model):
    title = models.TextField(max_length=500)
    from_date = models.DateField()
    to_date = models.DateField()
    description = models.TextField()
    organization = models.CharField(max_length=100)

    def __str__(self):
        return self.title + ", " + self.organization

class Article(models.Model):
    title = models.CharField(max_length=50)
    date = models.DateField()
    content = models.TextField()
    image = models.ImageField(upload_to='article_images', blank=True)

    def __str__(self):
        return self.title

    def img_url(self):
        return self.image.url