import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.css";
function BuyTogether({ loggedin, setLoggedIn }) {
  const cropType = useParams().type;
  const [quantity, setQuantity] = useState(null);
  const data = [10, 20, 30, 40];
  const navigate = useNavigate();
  const API_KEY = "3033fdbf-2e3b-4292-9ae7-e99df3f7ac81";
  const { isloggedin, user } = loggedin;
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(e);
    setQuantity(e.target.innerText);
    console.log(quantity);
  };
  const initPayment = (values) => {
    console.log("Hurray! Your Payment has been initiated!");
    axios
      .post("https://merchant.upigateway.com/api/create_order", {
        key: API_KEY,
        client_txn_id: "1234567890",
        amount: "100",
        p_info: "Product Name",
        customer_name: "Jon Doe",
        customer_email: "jondoe@gmail.com",
        customer_mobile: "9876543210",
        redirect_url: "http://google.com",
        udf1: "user defined field 1 (max 25 char)",
        udf2: "user defined field 2 (max 25 char)",
        udf3: "user defined field 3 (max 25 char)",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Enter your Name"),
    }),
    validateOnChange: true,
    onSubmit: initPayment,
  });
  return (
    <div className="buyContainer" style={{ padding: "4rem 3rem 1.5rem" }}>
      <div
        className="buyPanel"
        style={{
          fontSize: "1.8rem",
          width: "70%",
          padding: "3rem 1.5rem 3rem",
          margin: "2rem auto",
          background: "#c0e9f6",
        }}
      >
        <div
          style={{
            margin: "1rem 0 1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div>Select Quantity</div>
          <DropdownButton
            id="quantity"
            variant="success"
            title={quantity ? `${quantity}` : "Select Quantity"}
          >
            {data.map((number) => (
              <Dropdown.Item onClick={clickHandler}>{number}</Dropdown.Item>
            ))}
            {/* <Dropdown.Item onClick={clickHandler}>10</Dropdown.Item>
            <Dropdown.Item onClick={clickHandler}>20</Dropdown.Item>
            <Dropdown.Item onClick={clickHandler}>30</Dropdown.Item> */}
          </DropdownButton>
          <div>{250 * quantity} Rs</div>
        </div>
        <div style={{ margin: "3rem 0 3rem", textAlign: "center" }}>
          Paying 10% in advance
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "1.2rem",
          }}
        >
          <button
            style={{
              width: "fit-content",
              padding: "0.8rem",
              background: "orange",
              fontWeight: "bold",
              color: "white",
              borderRadius: "10px",
              boxShadow: "0px 0px 15px #999",
            }}
            onClick={() => {
              if (!isloggedin) {
                navigate("../signup");
              }
            }}
          >
            CONFIRM ORDER
          </button>
        </div>
        {/* {init && (
          <div className={styles.center}>
            <Form style={{ width: "100%" }}>
              <label htmlFor="name">Enter Your Name</label>
              <input
              type="text"
                id="name"
                placeholder="Name"
                error={formik.errors.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name.trim()}
                touched={formik.touched.name ? 1 : 0}
              />
              <label htmlFor="number">Enter Your Phone Number</label>
              <input
                id="number"
                placeholder="Contact Number"
                error={formik.errors.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number.trim()}
                touched={formik.touched.number ? 1 : 0}
              />
              <label htmlFor="email">Enter Your Email ID</label>
              <input
                id="email"
                placeholder="Email"
                error={formik.errors.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email.trim()}
                touched={formik.touched.email ? 1 : 0}
              />
              <label htmlFor="address">Enter Your Address</label>
              <input
                id="address"
                placeholder="Address"
                error={formik.errors.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address.trim()}
                touched={formik.touched.address ? 1 : 0}
              />
            </Form>
            <button
              style={{
                alignItems: "center",
                width: "fit-content",
                margin: "10px",
                padding: "0.8rem",
                background: "orange",
                fontWeight: "bold",
                color: "white",
                borderRadius: "10px",
                boxShadow: "0px 0px 15px #999",
              }}
              type="submit"
              onClick={initPayment}
            >
              CONFIRM PAYMENT
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default BuyTogether;
