from django.contrib import admin
from .models import *

# Register your models here.


@admin.register(Product)
class AdminProduct(admin.ModelAdmin):
    pass


@admin.register(Review)
class AdminReview(admin.ModelAdmin):
    pass


@admin.register(Order)
class AdminOrder(admin.ModelAdmin):
    pass


@admin.register(OrderItem)
class AdminOrderItem(admin.ModelAdmin):
    pass


@admin.register(ShippingAddress)
class AdminShippingAddress(admin.ModelAdmin):
    pass
