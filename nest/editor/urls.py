from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('nest.editor.views',
    url(r'^$', 'home', name='home'),
    url(r'^_js/world/add/$', 'add_world', name='add_world'),
    url(r'^_js/world/list/$', 'list_worlds', name='list_worlds'),
    url(r'^_js/world/(?P<id>[0-9]+)/$', 'get_world', name='get_world'),
)
