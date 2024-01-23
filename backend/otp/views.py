from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

import datetime

from otp.models import OTPModel, OTPAttachModel
from otp.send_otp import otp_send


class SentOTPView(APIView):
    """Can send OTP"""

    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):

        email = request.data.get("email")

        if email is None:
            raise ValidationError(
                "Can not send OTP without email!, must include email"
            )
        
        previous_OTP = OTPModel.objects.filter(email=email)
        
        if len(previous_OTP) != 0:
            previous_OTP_attach = OTPAttachModel.objects.filter(email=email)

            otp_date = previous_OTP_attach[0].updated_at.date()
            OTP_occur = previous_OTP_attach[0].occur

            now_date = datetime.datetime.now().date()
            if otp_date != now_date and OTP_occur>5:
                raise ValidationError("You already 5 times send otp")
            
            if len(previous_OTP) == 0:
                otp_send(email)
                return Response("You check OTP at your terminal or email inbox")
            else:
                previous_OTP.delete()
                otp_send(email)
                return Response("You check OTP at your terminal or email inbox!")
        
        otp_send(email)
        return Response("You check OTP at your terminal or email inbox!!")
