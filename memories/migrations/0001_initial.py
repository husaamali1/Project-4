# Generated by Django 5.0.1 on 2024-01-12 20:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('phones', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Memory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('size', models.PositiveIntegerField()),
                ('phones', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='memories', to='phones.phone')),
            ],
        ),
    ]
