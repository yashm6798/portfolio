# Generated by Django 3.1.7 on 2021-02-28 21:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0009_auto_20210228_2121'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='interests',
            new_name='detailed_bio',
        ),
    ]
