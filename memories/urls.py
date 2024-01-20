from django.urls import path
from .views import MemoryListCreateView, MemoryDetailView

urlpatterns = [
  path('', MemoryListCreateView.as_view()),
  path('<int:pk>/', MemoryDetailView.as_view())
]