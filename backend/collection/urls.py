from django.urls import path

from .views import (
    GuestCreateView,
    GiftCreateView,
    GiftListView,
    GuestdetailView,
    GiftItemUpdate,
    GiftRemoveView,
    GiftUpdateView,
)


urlpatterns = [
    #POST localhost/collection/guest-add/
    path(
        route="guest-add/", 
        view=GuestCreateView.as_view(), 
        name="guest_add"
    ),

    #POST localhost/collection/gift-add/
    path(route="gift-add/", 
        view=GiftCreateView.as_view(), 
        name="gift_add"
    ),

    #GET localhost/collection/gift-list/
    path(route="gift-list/", 
        view=GiftListView.as_view(), 
        name="gift_list"
    ),

    #GET localhost/collection/guest-detail/1/
    path(route="guest-detail/<int:pk>/", 
        view=GuestdetailView.as_view(), 
        name="guest_detail"
    ),

    #PATCH localhost/collection/gift-item-update/1/
    path(route="gift-item-update/<int:pk>/", 
        view=GiftItemUpdate.as_view(), 
        name="gift_item_update"
    ),

    #DELETE localhost/collection/gift-delete/1/
    path(route="gift-delete/<int:pk>/", 
        view=GiftRemoveView.as_view(), 
        name="gift_delete"
    ),

    #PUT localhost/collection/gift-update/1/
    path(route="gift-update/<int:pk>/", 
        view=GiftUpdateView.as_view(), 
        name="gift_update"
    ),
]