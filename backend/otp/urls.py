from django.urls import path

from .views import SentOTPView

urlpatterns = [
    # POST localhost/otp/send/
    path(
        route="send/",
        view=SentOTPView.as_view(),
        name="otp_send"
    ),
]