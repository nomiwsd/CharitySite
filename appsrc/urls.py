from django.urls import path
from . import views
urlpatterns = [
    path('', views.home,name='Home'),
    path('ourcampaign/', views.ourcampaign,name='ourcompaign'),
    path('news/', views.news,name='news'),
    path('contactus/', views.contactus,name='contactus'),
    path('donatenow/', views.donatenow,name='donatenow'),
]
