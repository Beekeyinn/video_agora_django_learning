from profiles.models import Profile
from rest_framework import serializers


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"
        read_only_fields = ["id", "user"]

    def create(self, validated_data):
        request = self.context.get("request", None)
        if request is None:
            raise Exception(
                f"Request is required as context in serializer {self.__class__.__name__}"
            )
        else:
            validated_data["user"] = request.user
        return super().create(validated_data)
