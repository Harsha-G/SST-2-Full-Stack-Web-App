import { Container } from "@material-ui/core";
import React from "react";

export default function() {
    return (
        <Container>
            <h1 style={{ marginTop: "10vh" }}>About</h1>
            <h3> This is a simple demo site that executes user-queries
                to a Sentiment-Analsis model hosted on a separate server.
                The frontend was made using React, using components from the 
                Material-UI library.The backend consists of a server hosted by the 
                Django-RestFramework, which has our Deep Learning model loaded.</h3>

            <h3> The Deep Learning Model we are using is a readily available model that can be 
                accessed on the HuggingFace Website. The exact name of the model is 'distilbert-base-uncased-finetuned-sst-2-english'.   
            </h3>

            <h3> This project would be my first full-stack web application as well as being my first project
                using the React Framework. I had alot of fun building it and look forward to building more apps using it! Despite
                it being very simple it definitely helped me get my foot in the door and get a grip on web-development. I hope it proves useful to others in the 
                future!            
            </h3>

            <h3>For more of my work you can refer to my github: <a href="https://github.com/Harsha-G">https://github.com/Harsha-G</a></h3>
        </Container>

    );
}