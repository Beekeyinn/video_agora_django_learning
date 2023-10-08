from django.db import models
from django.utils.translation import gettext_lazy as _

from accounts.models import User


# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(
        User, verbose_name=_("User Profile"), on_delete=models.CASCADE
    )
    first_name = models.CharField(verbose_name=_("First Name"), max_length=50)
    last_name = models.CharField(_("Last Name"), max_length=50)
    image = models.ImageField(upload_to="profiles")
    address = models.CharField(verbose_name=_("Address"), max_length=200)
    contact = models.CharField(_("Contact"), max_length=13)
    linked_in = models.URLField(_("LinkedIn URL"), max_length=200)
    facebook = models.URLField(_("Facebook Profile URL"), max_length=200)
    github = models.URLField(_("Github Url"), max_length=200)

    def __str__(self) -> str:
        return self.first_name + " " + self.last_name
