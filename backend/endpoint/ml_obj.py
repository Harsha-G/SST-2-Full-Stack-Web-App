import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import numpy as np

class ml_obj:
    
    def __init__(self):
        self.max_length = 256
        self.hg_model_hub_name = "distilbert-base-uncased-finetuned-sst-2-english"
        
        self.tokenizer = AutoTokenizer.from_pretrained(self.hg_model_hub_name)
        self.model = AutoModelForSequenceClassification.from_pretrained(self.hg_model_hub_name)
    
    def predict(self, text):
        tokens = self.tokenizer.tokenize(text)
        ids = self.tokenizer.convert_tokens_to_ids(tokens)
        input_ids = torch.tensor([ids])

        output = self.model(input_ids)
        
        predicted_probability = torch.softmax(output.logits, dim=1)[0].tolist()

        neg_score = predicted_probability[0]
        pos_score = predicted_probability[1]

        label = 'POSITIVE'
        if(neg_score > pos_score):
            label = 'NEGATIVE'

        output_obj = {
            "class_label":label,
            "label1_score":neg_score,
            "label2_score":pos_score,
        }

        return output_obj
