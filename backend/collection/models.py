from django.db import models


class GuestModel(models.Model):    
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    relationship = models.CharField(max_length=100, null=True, blank=True)

    class Gender(models.TextChoices):
        MALE = "MALE", "male"
        FEMALE = "FEMALE", "female"
        OTHERS = "OTHERS", "others"
    
    gender = models.CharField(max_length=10, choices=Gender.choices, null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name + "  - ID:" + str(self.id)
    
    class Meta:
        verbose_name = "Guest"
        verbose_name_plural = "Guests"
        db_table = "guest"    


class GiftModel(models.Model):
    guest = models.OneToOneField(GuestModel, on_delete=models.DO_NOTHING)
    amount = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    item = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return str(self.guest)
    
    class Meta:
        verbose_name = "Gift"
        verbose_name_plural = "Gifts"
        db_table = "gift"
