# Generated by Django 2.2.5 on 2019-10-16 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20191012_1946'),
    ]

    operations = [
        migrations.AddField(
            model_name='errors',
            name='level',
            field=models.CharField(default='ERROR', max_length=200),
            preserve_default=False,
        ),
    ]