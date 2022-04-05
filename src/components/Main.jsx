import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import LoginForm from "./LoginForm";
import NewLoginForm from "./NewLoginForm";
import CreateDiary from "./CreateDiary";

const Main = () => {
    return (
    <React.Fragment>
        <div className="Main">            
            <Navbar />        
            <div className="content">                
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/LoginForm" element={<LoginForm />} />         
                <Route path="/NewLoginForm" element={<NewLoginForm />} />         
                <Route path="/CreateDiary" element={<CreateDiary />} />         
                            
            </Routes>
            </div>
            </div>
    </React.Fragment>  
    );
}
 
export default Main;