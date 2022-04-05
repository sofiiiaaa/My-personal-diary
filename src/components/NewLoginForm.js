import React from "react";
import { Form, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

const handleclick= (event) =>{
  event.preventDefault();
  console.log("hi!! I work!!");
  //save datas and new ID into a server and then bring the user to the fist step of creation of his/her diary.
}

const NewLoginForm = () => {
    return (
          
      <div className="NewLoginForm">
                <h1>Hi! Here you will fill the form to register yourself for the first time!!</h1>
                <Form onSubmit={handleclick}>
                    <Row>
                        <Form.Group>
                            <Form.Label>Name:
                            <Form.Control id="name" className="name"type= "text" ></Form.Control>   
                            </Form.Label>
                        </Form.Group>
                    </Row>
                    <Row>
                <Form.Group>
                <Form.Label>Password:
                <Form.Control id="password" className="password" type= "text" ></Form.Control>   
                </Form.Label>
                </Form.Group>
                    </Row>                
                <Button onClick={handleclick} variant="light" type="submit">
                Submit
            </Button>           
            </Form>
      </div>
      );
}
 
export default NewLoginForm;