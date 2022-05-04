import React from "react";
import { Button, TextField} from "@material-ui/core";
import Grid from '@mui/material/Grid';
import axios from "axios";

class MaterialUIFormSubmit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:'',
            response:'',
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleChange(e){
        this.setState({value:e.target.value});

    }

    handleSubmit(e){
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/predict/',
            data: {
                "text": this.state.value
            }
        }).then(result =>this.setState({response: JSON.stringify(result.data) })).catch(error=>{console.log(error)});
        console.log(this.state.response);
        e.preventDefault()
    }

    clear(e){
        this.setState({value:'', response:''})
    }

    render(){
        return(
            <Grid item xs={12} marginTop="10vh" alignItems="center" > 
                <h1 >SST-2 Sentiment Analysis Demo</h1>                 
                <h3 >by, Harsha Gandikota</h3>    
                <form onSubmit={this.handleSubmit}>   
                        <TextField 
                            style={
                                {
                                    width:700,
                                }
                            }
                            label="Input Text"
                            multiline
                            margin="normal" 
                            minRows={2}
                            variant="outlined"
                            value={this.state.value} 
                            onChange={this.handleChange}/>
                        <Grid container spacing={12} direction="row" justifyContent="center" alignItems="center">
                            <Grid item >
                                <Button 
                                    variant="contained"
                                    color="primary" 
                                    type="submit" 
                                    value="Submit">
                                    SUBMIT
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.clear}>
                                    CLEAR
                                </Button>
                            </Grid>
                        </Grid>
                        <TextField
                            style={
                                {
                                    width:700,
                                }
                            } 
                            name="output"
                            value={this.state.response}
                            id="standard-read-only-input" 
                            multiline
                            fullWidth
                            margin="normal"
                            minRows={7}
                            variant="filled"/>                    
                </form>
            </Grid>
        );
    }
}

export default MaterialUIFormSubmit;
