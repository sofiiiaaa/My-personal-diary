import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const LoginForm = () => {

    const handleclick= (e) =>{
        console.log("hi!! I work!!")
        //save datas and new ID into a server and then bring the user to the fist step of creation of his/her diary.
      }
      
    return ( 
        <div className="NewLoginForm">
                <h1> Hi! Welcome back to your login!</h1>
        <form >
          <Form.Group>
          <Form.Label>Name:
          <Form.Control id="name" className="name"type= "text" ></Form.Control>   
          </Form.Label>
          </Form.Group>
          <br></br><br></br><br></br>
          <Form.Group>
          <Form.Label>Password:
          <Form.Control id="password" className="password" type= "text" ></Form.Control>   
          </Form.Label>
          </Form.Group>
          <br></br><br></br><br></br>
        <Button onClick={()=>handleclick()} variant="primary" type="submit">
        Submit
      </Button>
        </form>
      </div>
           

     );
}
 
export default LoginForm;