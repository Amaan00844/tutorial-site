# Django Web Application Example

from django.db import models
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.urls import path

# Model definition
class Item(models.Model):
    """Example model for the application."""
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created_at']

# View definition
def item_list(request):
    """View to display list of items."""
    try:
        items = Item.objects.all()
        return render(request, 'items/list.html', {'items': items})
    except Exception as e:
        return HttpResponse(f"Error: {str(e)}", status=500)

def item_detail(request, item_id):
    """View to display item details."""
    try:
        item = get_object_or_404(Item, id=item_id)
        return render(request, 'items/detail.html', {'item': item})
    except Exception as e:
        return HttpResponse(f"Error: {str(e)}", status=500)

# URL patterns
urlpatterns = [
    path('items/', item_list, name='item-list'),
    path('items/<int:item_id>/', item_detail, name='item-detail'),
]

# Admin configuration
from django.contrib import admin

class ItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'created_by')
    list_filter = ('created_at', 'created_by')
    search_fields = ('name', 'description')

admin.site.register(Item, ItemAdmin)
