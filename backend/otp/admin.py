from django.contrib import admin

from .models import OTPModel, OTPAttachModel


class OTPModelAdmin(admin.ModelAdmin):
    readonly_fields = (
        "created_at", 
        "updated_at",
    )
    list_display = (
        "email",
        "otp",
        "created_at",
        "updated_at",
    )
    list_display_links = (
        "email",
        "otp",
    )
    search_fields = ("email",)
    list_per_page = 25

class OTPAttachAdmin(admin.ModelAdmin):
    readonly_fields = (
        "created_at",
        "updated_at",
    )
    list_display = (
        "id",
        "email",
        "occur",
        "created_at",
        "updated_at",
    )
    list_display_links = (
        "email",
        "occur",
    )
    search_fields = (
        "email",
    )

admin.site.register(OTPModel, OTPModelAdmin)
admin.site.register(OTPAttachModel, OTPAttachAdmin)
