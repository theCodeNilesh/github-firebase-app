import React, { useState, useContext } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
} from "reactstrap";

import firebase from "firebase/compat/app";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../layout/Footer";

const Signup = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }

  return (
    <Container className="text-center">
      <style>{"body { background-color: #F3F5F7; }"}</style>
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card className="formcard">
            <Form onSubmit={handleSubmit}>
              <CardTitle className="login_title">SignUp Here</CardTitle>
              <CardBody>
                <FormGroup row className="mt-5">
                  <Label for="email" sm={3} className="label ms-1">
                    Email
                  </Label>
                  <Col sm={8}>
                    <input
                      type="email"
                      className="input ms-2"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="provide your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row className="mt-4">
                  <Label for="password" sm={3} className="label ms-1">
                    Password
                  </Label>
                  <Col sm={8}>
                    <input
                      type="password"
                      className="input ms-2"
                      name="password"
                      id="password"
                      placeholder="your password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>

              <Button type="submit" className="w-50 subbutton" color="primary">
                Sign Up
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Signup;
