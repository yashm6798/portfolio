from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProfileSerializer, ProjectSerializer, ArticleSerializer, WorkExperienceSerializer
from .models import Profile, Project, Article, WorkExperience
from django.contrib.auth.models import User

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

class WorkExperienceView(viewsets.ModelViewSet):
    serializer_class = WorkExperienceSerializer
    queryset = WorkExperience.objects.all()

class ProjectView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()