from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Memory
from .serializers.common import MemorySerializer
from .serializers.populated import PopulatedMemorySerializer

# path: /Memorys/
# methods: GET, POST


class MemoryListCreateView(ListCreateAPIView):
    queryset = Memory.objects.all()
    serializer_class = MemorySerializer

# path: /Memorys/:pk/
# methods: GET, PUT, PATCH, DELETE


class MemoryDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Memory.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PopulatedMemorySerializer
        return MemorySerializer
