from .common import PhoneSerializer
from memories.serializers.common import MemorySerializer

class PopulatedPhoneSerializer(PhoneSerializer):
  memory = MemorySerializer()