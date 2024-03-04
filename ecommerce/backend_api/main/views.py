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

class ProductDetail(generics.RetrieveAPIView):    
     queryset = models.Product.objects.all()
     serializer_class = serializers.ProductDetailSerializer