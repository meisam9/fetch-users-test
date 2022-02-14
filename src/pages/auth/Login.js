
import { useEffect, useState } from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/User/user.actions";

const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user);
    const handleLogin = (data) => {
        if(!user.loading){
            dispatch(loginUser(data))
            document.querySelector('#email').value=" ";
            document.querySelector('#password').value="";

        }
    }

    return (
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Admin Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={handleSubmit(handleLogin)}>
                            <Form.Group >
                                <Form.Label htmlFor="email">Email address</Form.Label>
                                <Form.Control 
                                    id="email" style={errors.email && {outline:'red solid 1px'}}  type="email" placeholder="Enter email" {...register("email",{required:"Please Enter Your Email"})}/>
                                {errors.email && <p className="mt-1" style={{color:'red'}}>{errors.email.message}</p>}
                            </Form.Group>

                            <Form.Group >
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control id="password" style={errors.password && {outline:'red solid 1px'}} type="password" placeholder="Password" {...register('password',{
                                    required:'Please Enter Your Password',
                                    minLength:{
                                        value:8,
                                        message:"Password should be atleast 8 chars"
                                    }
                                })} />
                                {errors.password && <p className="mt-1" style={{color:'red'}}>{errors.password.message}</p>}
                            </Form.Group>

                            <Button className="mt-2" id="btn-load" variant="success btn-block" type="submit" disabled={user.loading}>
                               {user.loading? 'loading': 'Login'}
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h5 className="text-center text-danger">{user.message.length ? user.message : null }</h5>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 Novin Dev. All Rights Reserved.</h6>
            </Container>
    );
};

export default Login;