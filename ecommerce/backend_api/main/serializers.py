from rest_framework import serializers
from . import models

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vendor
        fields = ['user','address']
        
class ProductCategorySerializer(serializers.ModelSerializer):
        class Meta:
            model = models.ProductCategory
            fields = ['title', 'detail']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = ['title', 'detail', 'price']  