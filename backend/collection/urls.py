from django.urls import path

from .views import (
    GiftCollectingView,
    GiftListView,
    GiftDetailView,
    GiftUpdateView,
    GiftDeleteView,
)


urlpatterns = [
    # POST: localhost/collection/take/
    path(
        route="take/", view=GiftCollectingView.as_view(), name="gift-collecting"
    ),
    # GET: localhost/collection/list/
    path(
        route="list/", view=GiftListView.as_view(), name="gift-list"
    ),
    # GET: localhost/collection/detail/id/
    path(
        route="detail/<int:guest_id>/", view=GiftDetailView.as_view(), name="gift-detail"
    ),
    # PATCH: localhost/collection/update/id/
    path(
        route="update/<int:guest_id>/", view=GiftUpdateView.as_view(), name="gift-update"
    ),
    # PATCH: localhost/collection/delete/id/
    path(
        route="delete/<int:guest_id>/", view=GiftDeleteView.as_view(), name="gift-delete"
    ),
]
