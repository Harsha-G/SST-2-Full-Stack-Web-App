from django.apps import AppConfig
from endpoint.ml_obj import ml_obj as MachineLearningObject


class EndpointConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'endpoint'
    
    print("Creating Machine Learning Object...")
    ml_obj = MachineLearningObject()
    print("Machine Learning Object Created...") 