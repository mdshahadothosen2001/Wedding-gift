from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response

from django.shortcuts import get_list_or_404

from .serializers import GuestSerializer, GiftSerializer
from .models import GuestModel, GiftModel
from otp.send_otp import otp_send
from otp.otp_verify import OTPVerify


class GuestCreateView(APIView):
    """Used for adding new guest data"""

    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        name = request.data.get("name")
        email = request.data.get("email")
        relationship = request.data.get("relationship")
        gender = request.data.get("gender")
        address = request.data.get("address")

        guest_data = {
            "name":name,
            "email":email,
            "relationship":relationship,
            "gender":gender.upper(),
            "address":address
        }

        if not email:
            raise ValidationError("Email must required!")
        
        serializer = GuestSerializer(data=guest_data)
        if serializer.is_valid():
            serializer.save()

            return Response("Successfull added")

        return Response("Please provide valid data")


class GiftCreateView(APIView):
    """This class to collecting gift from guests"""

    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        amount = request.data.get("amount")
        item = request.data.get("item")
        otp = request.data.get("otp")

        if email is None:
            raise ValidationError("Must required email")
        
        if otp is None:
            raise ValidationError("Must Required OTP")
        
        OTPVerify(email, otp)
        
        guest = get_list_or_404(GuestModel, email=email)

        gift_data = {
            "guest":guest[0].id,
            "amount":amount,
            "item":item
        }
        
        serializer = GiftSerializer(data=gift_data)
        if serializer.is_valid():
            serializer.save()
            return Response("successfully added")
        
        return Response("Please provide valid data")


class GiftListView(APIView):
    """This class used for  gift collection list"""

    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        gifts = get_list_or_404(GiftModel)

        gifts_list = []
        for gift in gifts:
            guest = get_list_or_404(GuestModel, id=gift.guest_id)

            gifts_list += [
                {
                    "guest_id":guest[0].id,
                    "guest":guest[0].name,
                    "item":gift.item,
                    "amount":gift.amount
                }
            ]
        
        return Response(gifts_list) 
    

class GuestdetailView(APIView):
    """This class used for return particular gu gift detail"""

    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        guest_id = kwargs["pk"]

        guest = get_list_or_404(GuestModel, id=guest_id) 
        gift = get_list_or_404(GiftModel, guest_id=guest_id)

        guest_name = guest[0].name
        guest_gender = guest[0].gender

        gift_amount = gift[0].amount
        gift_item = gift[0].item

        guest_data = {
            "id":guest_id,
            "name":guest_name,
            "gender":guest_gender,
            "amount":gift_amount,
            "item":gift_item
        }
        return Response(guest_data)


class GiftItemUpdate(APIView):
    """For updating item and amount of particular guest"""

    permission_classes = [AllowAny]

    def patch(self, request, *args, **kwargs):

        guest_id = kwargs["pk"]
        gift = get_list_or_404(GiftModel, guest_id=guest_id)

        gift_amount = request.data.get("amount")
        gift_item = request.data.get("item") 

        if not gift_amount and not gift_item:
            raise ValidationError("Must required amount and item")
        
        gift[0].amount = gift_amount
        gift[0].item = gift_item
        gift[0].save()
        return Response("Gift Item Updated")


class GiftRemoveView(APIView):
    """This class used to remove particular guest's gift"""

    permission_classes = [AllowAny]

    def delete(self, request, *args, **kwargs):

        guest_id = kwargs["pk"]
        gift = get_list_or_404(GiftModel, guest_id=guest_id)
        gift[0].delete()
        return Response("Completelly removed this guest's gift")


class GiftUpdateView(APIView):
    """This class use to update gift all data of specific guest"""

    permission_classes = [AllowAny]

    def put(self, request, *args, **kwargs):

        guest_id = kwargs["pk"]
        gift = get_list_or_404(GiftModel, guest_id=guest_id)

        guest_email = request.data.get("email")
        gift_amount = request.data.get("amount")
        gift_item = request.data.get("item")

        if not guest_email:
            raise ValidationError("Must required email")
        
        guest = get_list_or_404(GuestModel, email=guest_email)
        
        gift_data = {
            "guest":guest[0].id,
            "amount":gift_amount,
            "item":gift_item
        }
        
        serializer = GiftSerializer(gift[0], data=gift_data, partial=True)
        if serializer.is_valid():
            otp_send(email=guest_email)
            serializer.save()
            return Response(serializer.data)
        
        return Response("Please provide valid data")
