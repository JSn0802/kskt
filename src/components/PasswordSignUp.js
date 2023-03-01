import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import styled from "styled-components";

import { useUserAuth } from "../context/UserAuthContext";


const PasswordSignUp = ({loggedin, setloggedin}) => {
    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
    const [flag, setFlag] = useState(false);
    const [result, setResult] = useState("");
    const { setUpRecaptha, logOut } = useUserAuth();
    const [password,setPassword]=useState("");
    window["logOutFunction"] = logOut;
    const navigate = useNavigate();

const getPassword = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <>
      <Sdiv className="p-4 box">
        <h2 className="mb-3">Enter Detailsr</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getPassword} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            &nbsp;
          <PhoneInput
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <Button variant="secondary">Cancel</Button>
            </Link>
            &nbsp;
            <Button type="submit" variant="primary">
              LogIn
            </Button>
          </div>
          <div id="recaptcha-container"></div>
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
export default PasswordSignUp;