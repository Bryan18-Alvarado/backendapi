from django.urls import path
from . import views

urlpatterns = [
    path('vendors/', views.VendorList.as_view()),
    path('productcategory/', views.ProductCategory.as_view()),
    path('product/', views.Product.as_view())
]
