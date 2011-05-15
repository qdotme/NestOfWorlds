from datetime import datetime
from django.db import models

class World(models.Model):
    name = models.CharField(max_length=250, null=False, default='')
    content = models.TextField(null=False, default='')
    timestamp = models.DateTimeField(null=False)

    def __unicode__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.timestamp:
            self.timestamp = datetime.utcnow()
        return super(World, self).save(*args, **kwargs)

#    @classmethod
#    def names_with_counts(cls):
#        return [(d['name'], d['count'])
#                for d in World.objects.values('name').annotate(count=models.Count('id')).order_by('name')]
