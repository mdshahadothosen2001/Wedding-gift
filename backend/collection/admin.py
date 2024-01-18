from django.contrib import admin
from .models import GuestModel


class GuestModelAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "gender",
        "amount",
        "item",
    )
    list_display_links = (
        "name",
        "gender",
        "amount",
        "item",
    )
    search_fields = (
        "name",
        "gender",
        "amount",
        "item",
    )
    list_per_page = 25

admin.site.register(GuestModel, GuestModelAdmin)
