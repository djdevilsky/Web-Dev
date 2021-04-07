from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=300)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }
    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=0)
    description = models.TextField(default=' ')
    count = models.IntegerField()
    is_active = models.BooleanField()
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
        }
    def __str__(self):
        return '{}: {}'.format(self.id,self.name,self.price,self.description,self.count,self.is_active)