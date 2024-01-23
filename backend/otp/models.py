from django.db import models


class OTPModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    email = models.EmailField(unique=True)
    otp = models.CharField(max_length=6)

    def __str__(self):
        return self.email
    
    class Meta:
        verbose_name = "OTP"
        verbose_name_plural = "OTP"
        db_table = "otp"


class OTPAttachModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    email = models.EmailField(unique=True)
    occur = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.email
    
    class Meta:
        verbose_name = "OTP Attach"
        verbose_name_plural = "OTP Attach"
        db_table = "otp_attach"