from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request,'homepage.html')
def ourcampaign(request):
    return render(request,'OurCampaign.html')
def news(request):
    return render(request,'News.html')
def blogdetail(request):
    return render(request,'BlogDetail.html')
def blogsinglepage(request):
    return render(request,'BlogSinglePage.html')
def contactus(request):
    return render(request,'Contactus.html')
def donatenow(request):
    return render(request,'DonateNow.html')
def dashboard(request):
    return render(request,'Dashboard.html')
def donationhistory(request):
    return render(request,'Donation_history.html')
def Recent_funds(request):
    return render(request,'Recent_funds.html')
def Programs(request):
    return render(request,'Programs.html')
def Blogs(request):
    return render(request,'Blogs.html')
def Messages(request):
    return render(request,'Messages.html')
def Profile(request):
    return render(request,'Profile.html')
