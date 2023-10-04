from rest_framework import routers
from django.urls import include, path
from .views import ProductViewSet, UserViewSet, BrandViewSet

router = routers.SimpleRouter()
router.register(r'product', ProductViewSet, basename='product')
router.register(r'brand', BrandViewSet, basename='brand')
router.register(r'category', BrandViewSet, basename='category')
router.register(r'user', UserViewSet, basename='user')

urlpatterns = [
    path('', include(router.urls)),
]