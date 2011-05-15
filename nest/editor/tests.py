"""
This file demonstrates writing tests using the unittest module. These will pass
when you run "manage.py test".

Replace this with more appropriate tests for your application.
"""

from django.test import TestCase
from django.core.urlresolvers import reverse
from django.utils import simplejson
from models import World

class SimpleTest(TestCase):
    def test_save(self):
        World.objects.all().delete()
        resp = self.client.post(reverse('add_world'), data={'content': 'data',
                                                            'name': 'test world'})
        self.assertEqual(resp.status_code, 200)
        data = simplejson.loads(resp.content)

        self.assertEqual(World.objects.count(), 1)
        world = World.objects.get(id=data['id'])
        self.assertEqual(world.name, 'test world')
        self.assertEqual(world.content, 'data')

    def test_list(self):
        World.objects.all().delete()
        a = World.objects.create(name='a', content='data a', timestamp='2010-12-31 20:00:00')
        b = World.objects.create(name='b', content='data b', timestamp='2010-12-31 21:00:00')
        c1 = World.objects.create(name='c', content='data c1', timestamp='2010-12-31 22:00:00')
        c2 = World.objects.create(name='c', content='data c2', timestamp='2010-12-31 23:00:00')

        resp = self.client.get(reverse('list_worlds'))
        self.assertEqual(resp.status_code, 200)
        data = simplejson.loads(resp.content)
        self.assertEqual(data['worlds'],
                         [{'name': 'c', 'id': c2.id, 'timestamp': '2010-12-31T23:00:00'},
                          {'name': 'c', 'id': c1.id, 'timestamp': '2010-12-31T22:00:00'},
                          {'name': 'b', 'id': b.id, 'timestamp': '2010-12-31T21:00:00'},
                          {'name': 'a', 'id': a.id, 'timestamp': '2010-12-31T20:00:00'},
                          ])
        
