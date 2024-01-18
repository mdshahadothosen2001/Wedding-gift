from django.db import models

class GuestModel(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]

    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    item = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "Guest"
        verbose_name_plural = "Guests"
        db_table = "guest"    
