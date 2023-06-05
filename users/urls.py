from django import urls
from django.urls import path
from .views import UserDetail, UserList, hello_world

urlpatterns = [
    path('users/', UserList.as_view(), name='Users'),
    path('user/<int:pk>', UserDetail.as_view(), name='User'),
    path('hello', hello_world, name='hello')
]
