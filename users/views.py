from rest_framework.generics import RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers.common import ProfileSerializer
from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView
from .serializers.common import RegistrationSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer

class ProfileView(RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
      return self.request.user
    










