from django.conf.urls.defaults import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('nest.editor.views',
    url(r'^$', 'home', name='home'),
    url(r'^_js/world/add/$', 'add_world', name='add_world'),
    url(r'^_js/world/list_worlds/$', 'list_worlds', name='list_worlds'),
)
