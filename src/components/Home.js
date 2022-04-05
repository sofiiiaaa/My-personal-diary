import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (  
        <div className="PresentationText">        
            <h2> Are you looking for a platform that allows you to create your personal diary in complete freedom and security? <br>
            </br> Than you're in the right place!</h2>
            <h3> In this site you will be able to create and personalize your own diary from the very beginning! <br> 
            </br> Cover, type of paper, layout and calligraphy. <br></br> You will be able to add photos and emoticon so that you can live a true diary experience, but knowing that the diary will always be with you, ready to be from you updated or consulted! </h3>
            <h3>I wish you a good jurney, knowing that your story is perfectly safe with us</h3>        
            <h2> <Link to="/NewLoginForm" className="LinktoCreateDiary">Start create your own diary!!</Link> </h2>
        </div>     
    );
}
 
export default Home;