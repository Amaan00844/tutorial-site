# Django Web Application

## 🎯 Task Description

Create a basic Django web application with models, views, URLs, and admin interface.

## 📋 Requirements

1. Create a Django model:

   - Define an Item model with fields
   - Implement string representation
   - Set up model relationships

2. Create views:

   - List view for items
   - Detail view for individual items
   - Handle GET/POST requests

3. Set up URLs:

   - Configure URL patterns
   - Link views to URLs
   - Use named URLs

4. Configure admin interface:
   - Register models
   - Customize admin display

## 🚀 Example Structure

```python
from django.db import models
from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpResponse

# Model
class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# Views
def item_list(request):
    items = Item.objects.all()
    return render(request, 'items/list.html', {'items': items})

def item_detail(request, item_id):
    item = Item.objects.get(id=item_id)
    return render(request, 'items/detail.html', {'item': item})

# URLs
from django.urls import path

urlpatterns = [
    path('items/', item_list, name='item-list'),
    path('items/<int:item_id>/', item_detail, name='item-detail'),
]

# Admin
from django.contrib import admin
admin.site.register(Item)
```

## 🧪 Testing Criteria

Your code will be tested for:

- Proper model definition
- View implementation
- URL configuration
- Admin interface setup
- Overall Django structure

## 💡 Tips

- Follow Django's MTV (Model-Template-View) pattern
- Use proper field types in models
- Implement error handling in views
- Use Django's built-in admin features
