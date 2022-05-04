from django.urls import path
from endpoint.views import *

urlpatterns = [
    path(r"predict/", PredictView.as_view()),
    path(r"view_requests/", View_MLRequests.as_view({'get':'list'})),
    path(r"total_request_count/", Get_MLRequestsCount.as_view()),
]
