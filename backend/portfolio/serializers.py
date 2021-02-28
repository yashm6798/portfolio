from rest_framework import serializers
from .models import Profile, Project, Article, WorkExperience
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = ['user', 'bio', 'location', 'birth_date']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['title', 'from_date', 'to_date', 'description', 'organization']

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = ['title', 'from_date', 'to_date', 'description', 'organization']

class ArticleSerializer(serializers.ModelSerializer):
    image_url = serializers.URLField(source="img_url")
    class Meta:
        model = Article
        fields = ['id', 'title', 'date', 'link', 'image_url', 'introduction']