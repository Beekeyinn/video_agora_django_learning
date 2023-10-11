from django.urls import include, path

urlpatterns = [
    path("", include("profiles.api.urls")),
]
