from django.db import models

# Create your models here.
class Phone(models.Model):
  brand = models.CharField(max_length=200)
  model = models.CharField(max_length=200)
  image = models.URLField(null=True, blank=True)
  year = models.PositiveBigIntegerField()
  price = models.DecimalField(max_digits=10, decimal_places=2)
  memory = models.ForeignKey(
    to='memories.Memory',  
    on_delete=models.CASCADE,
    related_name='phones_memories',
    null=True
# the reason why i do this is because i have 2 foreign keys that are related so i have to make it phones_memory for the one to one to work 
  )
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='owned_phones',
    null=True
  )


  def __str__(self):
    return f'{self.brand} - {self.model} - {self.year}' 