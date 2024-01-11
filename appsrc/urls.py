from django.urls import path
from . import views
urlpatterns = [
    path('', views.home,name='Home'),
    path('ourcampaign/', views.ourcampaign,name='ourcompaign'),
    path('news/', views.news,name='news'),
    path('contactus/', views.contactus,name='contactus'),
    path('donatenow/', views.donatenow,name='donatenow'),
    path('dashboard/', views.dashboard,name='dashboard'),
    path('donationhistory/', views.donationhistory,name='donationhistory'),
    path('recentfunds/', views.Recent_funds,name='recentfunds'),
    path('programs/', views.Programs,name='programs'),
    path('blogs/', views.Blogs,name='blogs'),
    path('messages/', views.Messages,name='messages'),
    path('profile/', views.Profile,name='profile'),
    
]
