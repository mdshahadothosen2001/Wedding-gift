from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from django.shortcuts import get_object_or_404

from .models import GuestModel
from .serializers import ModelSerializer


class GiftCollectingView(APIView):
    """Used for create new instance"""

    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = ModelSerializer(data=request.data)
        if serializer.is_valid():

            guest = GuestModel.objects.create(**serializer.validated_data)
            return Response("Successfully collected gift!")
        else:
            return Response(serializer.errors, status=400)


class GiftListView(APIView):
    """Used for display collection list"""

    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        guests = GuestModel.objects.all()
        serializer = ModelSerializer(guests, many=True)
        return Response(serializer.data)


class GiftDetailView(APIView):
    """used for display particular objects"""

    permission_classes = [AllowAny]

    def get(self, request, guest_id, *args, **kwargs):
        guest = get_object_or_404(GuestModel, pk=guest_id)
        serializer = ModelSerializer(guest)
        return Response(serializer.data)

class GiftUpdateView(APIView):
    """Used for update particular object"""

    permission_classes = [AllowAny]

    def patch(self, request, guest_id, *args, **kwargs):
        guest = get_object_or_404(GuestModel, pk=guest_id)
        serializer = ModelSerializer(guest, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)

class GiftDeleteView(APIView):
    """Used for delete particular instance"""

    permission_classes = [AllowAny]

    def delete(self, request, guest_id, *args, **kwargs):
        guest = get_object_or_404(GuestModel, pk=guest_id)
        guest.delete()
        return Response({"detail": "Guest deleted successfully"})
