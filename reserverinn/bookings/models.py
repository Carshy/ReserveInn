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