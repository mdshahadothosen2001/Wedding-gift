from rest_framework import serializers
from .models import GuestModel

class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuestModel
        fields = ["id", "name", "gender", "amount", "item"]
