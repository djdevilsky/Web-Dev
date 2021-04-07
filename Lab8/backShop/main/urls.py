from django.urls import path
from main.views import hello, products_list, products_detail, category_list, category_detail

urlpatterns = [
    path('hi/', hello),
    path('categories/', category_list),
    path('categories/<int:product_id>/', category_detail),
    path('products/', products_list),
    path('products/<int:product_id>/', products_detail),
]