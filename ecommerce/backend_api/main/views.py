from django.shortcuts import render
from rest_framework import generics, permissions , pagination , viewsets
from . import serializers
from . import models

from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
   #permission_classes = [permissions.IsAuthenticated]
    
class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer
    # permission_classes = [permissions.IsAuthenticated]
    

class ProductCategory(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.ProductCategorySerializer
    
class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_class = pagination.PageNumberPagination
    
    def get_queryset(self):
        qs = super().get_queryset()
        if 'category' in self.request.GET:
            category_id = self.request.GET.get('category')
            try:
                category = models.ProductCategory.objects.get(id=category_id)
                qs = qs.filter(category=category)
            except models.ProductCategory.DoesNotExist:
                pass 
        return qs
    
class ProductDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer
    
    
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer
    
class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerDetailSerializer
    
class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer
    
    #pagination_class = pagination.PageNumberPagination


class OrderDetail(generics.ListAPIView):
    #queryset = models.OrderItems.objects.all()
    serializer_class = serializers.OrderDetailSerializer

    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = models.Order.objects.get(id=order_id)
        order_items = models.OrderItems.objects.filter (order=order)
        return order_items
    
# # class ProductCategoryList(generics.ListAPIView):
# #     queryset = models.ProductCategory.objects.all()
# #     serializer_class = serializers.ProductCategorySerializer

class CustomerAddressViewSet(viewsets.ModelViewSet):
    queryset = models.CustomerAddress.objects.all()
    serializer_class = serializers.CustomerAddressSerializer
    
class ProductRatingViewSet(viewsets.ModelViewSet):
    queryset = models.ProductRating.objects.all()
    serializer_class= serializers.ProductRatingSerializer
    
class CategoryList(generics.ListCreateAPIView):
    queryset= models.ProductCategory.objects.all()
    serializer_class= serializers.ProductCategorySerializer
    
class TagProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_classes = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        tag = self.kwargs['tag']
        qs = qs.filter(tags__icontains=tag)
        return qs

class RelatedProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    pagination_classes = pagination.PageNumberPagination
    
    def get_queryset(self):
        qs = super().get_queryset()
        product_id = self.kwargs['pk']
        product = models.Product.objects.get(id=product_id)
        qs = qs.filter(category=product.category).exclude(id=product_id)
        return qs

@csrf_exempt
def customer_login(request):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username , password=password)
        if user:
            msg={
                'bool':'True',
                'user':user.username,
            }
        else:
            msg={
                'bool':'False',
                'msg':'Nombre de usuario o password invalido!!'
            }
        return JsonResponse(msg)
    
@csrf_exempt
def customer_register(request):
    first_name = request.POST.get('username')
    last_name = request.POST.get('last_name')
    username = request.POST.get('username')
    email = request.POST.get('email')
    mobile = request.POST.get('mobile')
    password = request.POST.get('password')
    
    try:
        user =user.objects.create(
        first_name=first_name,
        last_name=last_name,
        username=username,
        email=email,
        password=password,
        )
        if user:
            try:
                customer = models.Customer.objects.create(
                    user=user,
                    mobile=mobile
                )
                msg={
                    'bool':'True',
                    'user':user,
                    'customer':customer.id,
                    'msg':'Usuario creado con exito'
                }
            except IntegrityError:
                msg={
                    'bool':'False',
                    'msg':'Error el celular ya existe'
                }    
        else:
            msg={
                'bool':'False',
                'msg':'Oops...lo sentimos tuvimos un error'
            }        
    except IntegrityError:
        msg={
            'bool':'False',
            'msg':'Error el usuario ya existe'
        }
    return JsonResponse(msg)           