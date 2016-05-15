from django.db import models
# from django.utils.timezone.now

# Create your models here.
class Card(models.Model):
	# created = models.DateTimeField(auto_now_add=True, default=timezone.now)
	name = models.CharField(max_length=255)
	description = models.TextField()
	priority = models.CharField(max_length=255)
	status = models.CharField(max_length=255)

	# the priority must have a correlating number so can order by
	
	# class Meta:
	# 	ordering = ('created',)

	def __str__(self):
		return self.name
