from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Location(models.Model):
    CITY_CHOICES = [
        ('Nairobi', 'Nairobi'),
        ('Dubai', 'Dubai'),
        ('New York', 'New York'),
        ('London', 'London'),
        ('Berlin', 'Berlin'),
        ('Paris', 'Paris'),
        # Add more cities as needed
    ]
    city = models.CharField(max_length=50, choices=CITY_CHOICES)

    def __str__(self):
        return self.city

class Hotel(models.Model):
    name = models.CharField(max_length=100)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    description = models.TextField()

    def __str__(self):
        return self.name

class Room(models.Model):
    ROOM_TYPE_CHOICES = [
        ('Single', 'Single'),
        ('Double', 'Double'),
        ('Suite', 'Suite'),
    ]
    hotel = models.ForeignKey(Hotel, related_name='rooms', on_delete=models.CASCADE)
    room_type = models.CharField(max_length=50, choices=ROOM_TYPE_CHOICES)
    number = models.CharField(max_length=10)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    available = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.room_type} - {self.number}'