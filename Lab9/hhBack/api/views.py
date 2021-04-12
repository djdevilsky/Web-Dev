from django.shortcuts import render
from api.models import Company, Vacancy
from django.http.response import JsonResponse

def companies(request):
    if request.method == 'GET':
        companies_list = Company.objects.all()
        companies_json = [c.to_json() for c in companies_list]
        return JsonResponse(companies_json, safe=False)

def company(request, id):
    try:
        company_detail = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error: ': str(e)})
    if request.method == 'GET':
        return JsonResponse(company_detail.to_json(), safe=False)

def vacancies(request):
    if  request.method  ==  'GET' :
        vacancies_list = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies_list]
        return JsonResponse(vacancies_json, safe=False)

def vacancy(request, id):
    try:
        vacancy_detail = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error: ' + str(e)})
    if  request.method  ==  'GET' :
        return JsonResponse(vacancy_detail.to_json(), safe=False)

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error: ' + str(e)})
    vacancies_list = company.vacancies.all()
    vacancies_json = [v.to_json() for v in vacancies_list]
    if  request.method  ==  'GET' :
        return JsonResponse(vacancies_json, safe=False)

def top_ten(request):
    if  request.method  ==  'GET' :
        try:
            vacancies_list = Vacancy.objects.order_by("-salary")
            vacancies_json = [v.to_json() for v in vacancies_list[:10]]
        except Company.DoesNotExist as e:
            return JsonResponse({'error: ' + str(e)})

    return JsonResponse(vacancies_json, safe=False)


