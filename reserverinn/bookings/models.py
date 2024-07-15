from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Location(models.Model):
    CITY_CHOICES = [
        ('Nairobi', 'Nairobi'),
        ('Dubai', 'Dubai'),
        ('New York', 'New York'),
        ('London', 'London'),
        ('Berlin', 'Berlin'),
        ('Paris', 'Paris'),
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
    room_number = models.CharField(max_length=10)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.room_type} - {self.number}'

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    check_in = models.DateField()
    check_out = models.DateField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'Booking {self.id} by {self.user.username}'