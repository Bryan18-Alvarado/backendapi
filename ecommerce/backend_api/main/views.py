from django.shortcuts import render
from rest_framework import generics, permissions
from . import serializers
from . import models
# Create your views here.

class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    #permission_classes = [permissions.IsAuthenticated]

class VendorDetail(generics.RetrieveUpdateDestroyAPIView): #retrieve=retornar #RetrieveUpdateDestroyAPIView = creame, actualizame, elimina
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer
        
class ProductCategory(generics.ListAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.ProductCategorySerializer
    
class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer

class ProductDetail(generics.RetrieveUpdateDestroyAPIView):    
     queryset = models.Product.objects.all()
     serializer_class = serializers.ProductDetailSerializer
     
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer

class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class=serializers.CustomerDetailSerializer         


class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class=serializers.OrderSerializer
    
class OrderDetail(generics.ListAPIView):
    #queryset = models.OrderItems.objects.all()
    serializer_class=serializers.OrderDetailSerializer
    
    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items= models.OrderItems.objects.filter(order=order)
        return order_items