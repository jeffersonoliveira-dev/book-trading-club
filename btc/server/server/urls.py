
from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path("", 
        TemplateView.as_view(template_name="application.html"),
        name="app",
    ),
]
