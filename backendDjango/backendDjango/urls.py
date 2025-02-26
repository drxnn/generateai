from django.urls import include, path

urlpatterns = [
    path('api/', include('avatar_api.urls')),
]