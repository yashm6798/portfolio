from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProfileSerializer, ProjectSerializer, ArticleSerializer, WorkExperienceSerializer, EducationSerializer
from .models import Profile, Project, Article, WorkExperience, Education
from django.contrib.auth.models import User
from django.http import HttpResponse
from PIL import Image
from backend.settings import STATIC_URL
import os

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all().order_by('-date')

class WorkExperienceView(viewsets.ModelViewSet):
    serializer_class = WorkExperienceSerializer
    queryset = WorkExperience.objects.all().order_by('-to_date')

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all().order_by('-to_date')

class EducationView(viewsets.ModelViewSet):
    serializer_class = EducationSerializer
    queryset = Education.objects.all().order_by('-to_date')

def ImageView(request, id):
    article = Article.objects.get(id=id)
    response = HttpResponse(content_type="image/png")
    img = Image.open(article.image)
    img.save(response,'png')
    return response