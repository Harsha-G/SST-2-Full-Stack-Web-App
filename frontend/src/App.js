
import './App.css';
import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import MaterialUIFormSubmit  from './Demo';
import About from './About';

function App(){
  const routes = ["/", "/About"];
  return(
    <div className="App">
      <BrowserRouter>      
        <AppBar>
          <Tabs >
            <Tab value={routes[0]} label="Demo" component={Link} to={routes[0]}/>
            <Tab value={routes[1]} label="About" component={Link} to={routes[1]}/>  
          </Tabs>             
        </AppBar>  
      
        <Routes>
          <Route path="/" element={<MaterialUIFormSubmit/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
