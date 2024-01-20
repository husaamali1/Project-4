# Generated by Django 5.0.1 on 2024-01-12 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Phone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(verbose_name=200)),
                ('model', models.CharField(verbose_name=200)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('year', models.PositiveBigIntegerField()),
            ],
        ),
    ]
