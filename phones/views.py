from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import Phone
from .serializers.common import PhoneSerializer
from .serializers.populated import PopulatedPhoneSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from lib.permissions import IsOwnerOrReadOnly
from lib.views import OwnerListCreateView

# path: /phones/
# methods: GET, POST


class PhoneListCreateView(OwnerListCreateView):
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

# path: /phones/:id/
# methods: GET, PUT, PATCH, DELETE


class PhoneDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Phone.objects.all()
    serializer_class = PopulatedPhoneSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_serializer_class(self):
        print('self request method ->', self.request.method)
        if self.request.method == 'PUT':
            return PhoneSerializer
        return PopulatedPhoneSerializer

