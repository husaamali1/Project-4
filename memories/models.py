from django.db import models

# Create your models here.
class Memory(models.Model):
    size = models.CharField(max_length=200)

    def __str__(self):
        return f'Memory - Size: {self.size}GB'
                      














    # phones = models.ForeignKey(
    # to='phones.Phone', 
    # on_delete=models.CASCADE,
    # related_name='memories')
