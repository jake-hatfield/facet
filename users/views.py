from django.http import HttpRequest, HttpResponse
from .models import User
from .serializer import UserSerializer
from rest_framework import generics

# user by id - GET, UPDATE, DELETE
class UserDetail(generics.RetrieveDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# GET users
class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# hello world
def hello_world(HttpRequest):
    return HttpResponse('Hello, world!')
