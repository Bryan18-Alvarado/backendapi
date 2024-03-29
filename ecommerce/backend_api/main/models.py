from django.db import models
from django.contrib.auth.models import User
# Create your models here.

#vendor Models
class Vendor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    address = models.TextField(null=True)
    
    def  __str__(self):
        return self.user.username
    
#product category
class ProductCategory(models.Model):
    title = models.CharField(max_length=200)  
    detail =models.TextField(null=True)  
    
    def __str__(self):
        return self.title
    
#product
class Product(models.Model):
    category = models.ForeignKey(ProductCategory, on_delete=models.SET_NULL, null=True, related_name='category_product')
    vendor  = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.FloatField()
        
    def  __str__(self):
        return self.title    
    
    
class Customer(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField(unique=True)   
    
    def __str__(self):
        return self.user.username

class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='order_items') 
    order_time =models.DateTimeField(auto_now_add=True)
    
    def __unicode__(self):
        return '%s' %(self.order_time)
    
class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.product.title    