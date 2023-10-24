import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "react-bootstrap/Form";
// import { Button } from "react-bootstrap/Button"; 

function SingUp(){
    return(
        <div>
            <Form>
                <Form.Group className='mb-3 mx-4'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='user' placeholder='Enter username'></Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}

export default SingUp;