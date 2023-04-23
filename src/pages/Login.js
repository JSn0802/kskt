import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Sdiv className="p-4 box">
        <h2 className="mb-3" align="center">Choose An Option</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicOption">
          </Form.Group>
          <div className="button-center" align="center">
            &nbsp;
            <Link to="/passwordSignUp">
              <Button variant="primary"> Password LogIn</Button>
            </Link>
            &nbsp;
            <Link to="/otpSignUp">
              <Button variant="primary"> OTP LogIn </Button>
            </Link>
            &nbsp;
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            
          </div>
        </Form>
    </Sdiv>
    </>
  );
};
const Sdiv=styled.div`
display:flex;
flex-direction: column;
margin: 5% 30%;

`
export default Login;