from rest_framework.routers import DefaultRouter
from .views import EventViewSet
from django.urls import path
from .views import UserRegistration, UserLogin
router = DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('register/', UserRegistration.as_view(), name='user_registration'),
    path('login/', UserLogin.as_view(), name='user_login'),
]