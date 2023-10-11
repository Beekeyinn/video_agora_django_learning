from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.viewsets import ModelViewSet
from rest_framework.exceptions import PermissionDenied, NotAuthenticated
from profiles.api.serializers import ProfileSerializer
from profiles.models import Profile


class ProfileViewSet(ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Profile.objects.get(user=self.request.user)
        raise NotAuthenticated()
