from .common import MemorySerializer
from phones.serializers.common import PhoneSerializer

class PopulatedMemorySerializer(MemorySerializer):
  phones = PhoneSerializer(many=True)