from rest_framework import serializers

from .models import GuestModel, GiftModel


class GuestSerializer(serializers.ModelSerializer):
    """Used for serializing the data for guest model"""

    class Meta:
        model = GuestModel
        fields = ["id", "name", "email", "relationship", "gender", "address"]


class GiftSerializer(serializers.ModelSerializer):
    """Used for serializing the data for gift model"""

    class Meta:
        model =  GiftModel
        fields = ["id", "guest", "amount", "item"]

