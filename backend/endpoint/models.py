from cProfile import label
from django.db import models


class Requests(models.Model):
    input_sentence = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now=True)
    class_label = models.CharField(max_length=30)
    label1_score = models.FloatField()
    label2_score = models.FloatField()
