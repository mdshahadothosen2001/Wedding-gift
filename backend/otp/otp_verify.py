from rest_framework.response import Response

from django.shortcuts import get_object_or_404
from datetime import datetime, timedelta
from django.utils import timezone

from .models import OTPModel


def OTPVerify(email, otp):
    """Used for verifying the otp validation"""

    otp_obj = get_object_or_404(OTPModel, email=email, otp=otp)

    now_date = datetime.now().date()
    now_time = datetime.now().time().strftime("%H:%M:%S")

    otp_obj_date = otp_obj.created_at.date()
    validation_time = timezone.localtime(otp_obj.created_at) + timedelta(minutes=10)
    validation_time = validation_time.time().strftime("%H:%M:%S")

    if now_date != otp_obj_date or now_time >= validation_time:
        otp_obj.delete()

        return Response("Timeout!, OTP has expired.")
    
    otp_obj.delete()
