# Generated by Django 3.1.7 on 2021-03-04 04:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0012_education_city'),
    ]

    operations = [
        migrations.AddField(
            model_name='workexperience',
            name='image',
            field=models.ImageField(blank=True, upload_to='static/images/work_experience_images'),
        ),
    ]
