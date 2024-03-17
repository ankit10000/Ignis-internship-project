from rest_framework import serializers
from .models import Event
from django.contrib.auth.models import User

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password','first_name','last_name','email']
        extra_kwargs = {'password': {'write_only': True}}
        