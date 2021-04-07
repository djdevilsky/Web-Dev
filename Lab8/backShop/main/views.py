from django.http.response import HttpResponse, JsonResponse
from main.models import Product, Category

def hello(request):
    return HttpResponse('hello')

# def products_list(request):
#     return HttpResponse('List of products')
#
# def products_detail(request, product_id):
#     return HttpResponse(f'Product page: {product_id}')

# products = [
#     {
#         'id': i,
#         'name': f'Product {i}',
#         'price': 1000*i
#     } for i in range(1, 11)
# ]

# def products_detail(request, product_id):
#     for product in products:
#         if product['id']==product_id:
#             return JsonResponse(product, safe=False)
#     return JsonResponse({'message': 'Not found'})

def products_detail(request, product_id):
    try:
        product= Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, safe=False)
    return JsonResponse(product.to_json(),safe=False)

def products_list(request):
    products=Product.objects.all()
    products_json =[product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def category_list(request):
    categories=Category.objects.all()
    categories_json =[c.to_json() for c in categories]
    return JsonResponse(categories_json,safe=False)

def category_detail(request,product_id):
    try:
        category=Category.objects.get(id=product_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error':str(e)},safe=False)

    return JsonResponse(category.to_json(),safe=False)

# d=Category(id=1 ,name='Ps2', price=500, description='not best in the world', count=2, is_active=True)
# d=Category(name='Playstations')
# d.save()