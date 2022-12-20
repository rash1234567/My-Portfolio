import React from 'react'
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Projects from './Projects/Projects'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> 
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
    </Router>
  </React.StrictMode>
);
