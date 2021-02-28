from django.contrib import admin
from .models import Profile, Project, Article, WorkExperience, Education

admin.site.register(Profile)
admin.site.register(Project)
admin.site.register(Article)
admin.site.register(WorkExperience)
admin.site.register(Education)