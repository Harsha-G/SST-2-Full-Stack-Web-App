# Generated by Django 3.2.5 on 2022-04-25 05:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Requests',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('input_sentence', models.TextField(max_length=1000)),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('class_label', models.CharField(max_length=30)),
                ('label1_score', models.FloatField()),
                ('label2_score', models.FloatField()),
            ],
        ),
    ]
