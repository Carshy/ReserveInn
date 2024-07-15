from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Location, Hotel, Room, Booking

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['id', 'city']

class HotelSerializer(serializers.ModelSerializer):
    location_id = serializers.PrimaryKeyRelatedField(
        queryset=Location.objects.all(), source='location', write_only=True)
    location = LocationSerializer(read_only=True)

    class Meta:
        model = Hotel
        fields = ['id', 'name', 'location_id', 'location', 'description', 'address', 'phone_number', 'photo', 'email']

class RoomSerializer(serializers.ModelSerializer):
    hotel = HotelSerializer()

    class Meta:
        model = Room
        fields = ['id', 'hotel', 'room_type', 'room_number', 'price', 'is_available']

class BookingSerializer(serializers.ModelSerializer):
    user = User
    room = RoomSerializer()

    class Meta:
        model = Booking
        fields = ['id', 'user', 'room', 'check_in', 'check_out', 'created_at', 'updated_at']