from django.http import JsonResponse

def test_endpoint(request):
    return JsonResponse({"message": "Django-React connection successful!"})