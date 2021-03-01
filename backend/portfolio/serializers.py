from rest_framework import serializers
from .models import Profile, Project, Article, WorkExperience, Education
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email']

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['university', 'gpa', 'from_date', 'to_date', 'courses', 'city']

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = ['user', 'bio', 'location', 'detailed_bio', 'contact_info']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'from_date', 'to_date', 'description', 'organization']

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = ['id', 'title', 'from_date', 'to_date', 'description', 'organization']

class ArticleSerializer(serializers.ModelSerializer):
    image_url = serializers.URLField(source="img_url")
    class Meta:
        model = Article
        fields = ['id', 'title', 'date', 'link', 'image', 'introduction']