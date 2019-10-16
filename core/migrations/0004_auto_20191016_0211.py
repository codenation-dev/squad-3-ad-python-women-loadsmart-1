# Generated by Django 2.2.5 on 2019-10-16 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_errors_level'),
    ]

    operations = [
        migrations.AlterField(
            model_name='errors',
            name='level',
            field=models.CharField(choices=[('ERROR', 'log error'), ('DEBUG', 'log debug'), ('WARNING', 'log warning')], default='ERROR', max_length=32),
        ),
    ]