from django.shortcuts import render

# Create your views here.
def mathadd(request):
    context = {}
    return render (request,'mathapp/mathadd.html',context)

def cylindervolume(request):
    context = {}
    return render (request,'mathapp/cylindervolume.html',context)
