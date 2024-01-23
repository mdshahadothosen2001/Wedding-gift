from django.contrib import admin

from .models import GuestModel, GiftModel


class GuestAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "email",
        "relationship",
        "gender",
        "address",
    )
    list_display_links = (
        "name",
        "email",
        "address",
    )
    search_fields = (
        "name",
        "email",
        "address",
    )
    list_per_page = 25

class GiftAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "guest",
        "amount",
        "item",
    )
    list_display_links = (
        "guest",
        "amount",
        "item",
    )
    search_fields = (
        "amount",
        "item",
    )
    list_per_page = 25

admin.site.register(GuestModel, GuestAdmin)
admin.site.register(GiftModel, GiftAdmin)
