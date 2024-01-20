from rest_framework.serializers import ModelSerializer
from ..models import Memory

class MemorySerializer(ModelSerializer):
  class Meta:
    model = Memory
    fields = ['size']