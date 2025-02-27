from django.urls import include, path

# include() is like app.use in express
urlpatterns = [
    path('api/', include('avatar_api.urls')),
]