from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request,'homepage.html')
def ourcampaign(request):
    return render(request,'OurCampaign.html')
def news(request):
    return render(request,'News.html')
def contactus(request):
    return render(request,'Contactus.html')
