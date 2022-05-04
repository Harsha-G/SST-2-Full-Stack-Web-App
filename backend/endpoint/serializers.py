from rest_framework import serializers
from endpoint.models import Requests

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requests
        fields = '__all__'