# Generated by Django 5.0.7 on 2024-07-18 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookings', '0006_booking_hotel'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='room',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='hotel_photos/'),
        ),
    ]
