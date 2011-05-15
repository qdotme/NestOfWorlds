from django.http import HttpResponse
from django.shortcuts import render
from django.utils import simplejson
from models import World

def json_response(data):
    return HttpResponse(simplejson.dumps(data))

def home(request):
    return render(request, 'editor/home.html')

def add_world(request):
    # TODO: validation
    world = World.objects.create(name=request.POST['name'],
                                 content=request.POST['content'])
    return json_response({'id': world.id})

def list_worlds(request):
    # TODO: pagination 
    worlds = [{'id': w.id, 'name': w.name, 'timestamp': w.timestamp.isoformat()}
              for w in World.objects.order_by('-timestamp')]
    return json_response({'worlds': worlds})
