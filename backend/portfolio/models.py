from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=30, blank=True)
    detailed_bio = models.TextField(blank=True)
    contact_info = models.TextField(blank=True)

class Education(models.Model):
    university = models.CharField(max_length=100)
    city = models.CharField(max_length=100, blank=True)
    gpa = models.CharField(max_length=5)
    courses = models.TextField()
    from_date = models.DateField()
    to_date = models.DateField()

class WorkExperience(models.Model):
    title = models.CharField(max_length=50)
    from_date = models.DateField()
    to_date = models.DateField()
    description = models.TextField()
    organization = models.CharField(max_length=100, blank=True)
    image = models.ImageField(upload_to='static/images/work_experience_images', blank=True)

class Project(models.Model):
    title = models.TextField(max_length=500)
    from_date = models.DateField()
    to_date = models.DateField()
    description = models.TextField()
    organization = models.CharField(max_length=100, blank=True)

class Article(models.Model):
    title = models.CharField(max_length=50)
    introduction = models.TextField(blank=True)
    date = models.DateField()
    link = models.URLField(blank=True)
    image = models.ImageField(upload_to='static/images/article_images', blank=True)

    def img_url(self):
        return self.image.name