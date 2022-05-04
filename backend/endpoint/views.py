from django.shortcuts import render
from rest_framework.response import Response
from endpoint.serializers import RequestSerializer
from endpoint.models import Requests
from endpoint.apps import EndpointConfig

from rest_framework import views, viewsets

from datetime import datetime


class PredictView(views.APIView):

    def post(self, request, format=None):
        input_text = request.data.get("text")

        output = EndpointConfig.ml_obj.predict(input_text)

        ml_request = Requests(input_sentence=input_text,
                           class_label=output["class_label"],
                           label1_score=output["label1_score"],
                           label2_score=output["label2_score"],)
        
        ml_request.save()

        output["input_text"] = input_text

        return(Response(output))

class View_MLRequests(viewsets.ReadOnlyModelViewSet):
    queryset = Requests.objects.all()
    serializer_class = RequestSerializer

class Get_MLRequestsCount(views.APIView):

    def get(self, request, format=None):
        count = Requests.objects.count()

        now = datetime.now()

        payload = {
            "date_and_time" : str(now),
            "total_request_count" : str(count),
        }

        return (Response(payload))