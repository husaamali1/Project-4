from django.urls import path
from .views import PhoneListCreateView, PhoneDetailView

urlpatterns = [
  path('', PhoneListCreateView.as_view()),
  path('<int:pk>/', PhoneDetailView.as_view())
]