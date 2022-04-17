import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div>
           <Form className='p-5 m-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  type="name" placeholder="Enter Your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  type="email" placeholder="Enter Your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  type="name" placeholder="Enter Your Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  type="number" placeholder="Enter Your Phone number" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Checkout;