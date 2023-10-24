import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from "react-bootstrap";

function BtnPersonalizado(props){
    return(
        <Button 
            className={props.className}
            variant={props.variant}
            type={props.type}>
           {props.text} 
        </Button>
    )
}

const Formulario = function(){
    return(
        <div  style={{ backgroundColor: '#000', color: '#fff' }}>
            <Form> 
                <Container>
                    <Form.Group className="mb-3 mx-4">
                        <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>

                    <Form.Group className='mb-3 mx-4'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Password'/>
                    </Form.Group>

                    <BtnPersonalizado variant='primary' className='mx-2' type='submit' text='Login'/>
                    <BtnPersonalizado variant='danger' className='mx-2' type='button' text='Sing Up'/>
                </Container>
            </Form>
        </div>
    )
}

export default Formulario;