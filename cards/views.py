from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, renderers 
from .models import Card
from .serializers import CardSerializer


class CardsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows cards to be viewed or edited.
    """
    queryset = Card.objects.all().order_by('id')
    serializer_class = CardSerializer
    renderer_classes = (renderers.TemplateHTMLRenderer,)
    template_name = 'cards.html'


class MasterViewSet(viewsets.ModelViewSet):
	queryset = Card.objects.all().order_by('id')
	serializer_class = CardSerializer

		