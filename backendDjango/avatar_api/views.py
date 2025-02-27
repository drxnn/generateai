import json
from django.http import JsonResponse

# view handles responses 
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt  # for now 
def test_endpoint(request):
    keyword = "abc obamaai"
    if request.method == "POST":
        try:
            data = json.loads(request.body)  # like convert to object
            print(data)
            prompt = data.get("prompt", "")
            print("Received prompt:", prompt)  
            return JsonResponse({"message": "Received!", "prompt": prompt})
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

    return JsonResponse({"error": "Only POST requests allowed"}, status=405)

    #figure out how to connect to google colab