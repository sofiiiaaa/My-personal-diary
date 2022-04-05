import {React} from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

    return (  
        <nav className="navbar">
            <div className="title">
            <h1>My personal Diary</h1> 
            </div>            
            <div className="list-of-options"> 
                <Link to= "/"> <button id="button-home"> Home </button> </Link>
                <Link to= "/LoginForm"><button id="button-Login"> Log-in </button></Link>               
            </div>            
        </nav>
    );
}
 
export default Navbar;