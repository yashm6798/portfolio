from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProfileSerializer, ProjectSerializer, ArticleSerializer, WorkExperienceSerializer, EducationSerializer
from .models import Profile, Project, Article, WorkExperience, Education
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.conf import settings
from PIL import Image
from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all().order_by('-date')

class WorkExperienceView(viewsets.ModelViewSet):
    serializer_class = WorkExperienceSerializer
    queryset = WorkExperience.objects.all()

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all().order_by('-to_date')

class EducationView(viewsets.ModelViewSet):
    serializer_class = EducationSerializer
    queryset = Education.objects.all().order_by('-to_date')

def ImageView(request, id):
    print("Inside view")
    article = Article.objects.get(id=id)
    response = HttpResponse(content_type="image/png")
    img = Image.open(article.image)
    img.save(response,'png')
    return response

# Serve Single Page Application
index = never_cache(TemplateView.as_view(template_name='index.html'))