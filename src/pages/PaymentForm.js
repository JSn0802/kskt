import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from "axios"
import './Payment.css'

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": {color: "#fce883"},
            "::placeholder": {color: "#87bbfd"}
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm({price}) {
    const [success, setSuccess] = useState(false)   
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        console.log("data:",price)
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })  

        if(!error) {
            try {
                
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment", {
                    amount: price*100,   //10 dollars = 1000 cents
                    id: id
                })

                if(response.data.success) {
                    console.log("Payment Successful")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

  return (
    <>
    &nbsp;
    &nbsp;
    &nbsp;
    {!success ? 
    <form onSubmit={handleSubmit}>
        <h1>Enter Details</h1>
        <fieldset className="FormGroup">
            <div className="FormRow">
                <CardElement options={CARD_OPTIONS}/>

            </div>
        </fieldset>
        <button> Pay </button>
    </form>
    :
    <div>

        <h2>Payment Successful!!</h2>
        <h2>You just bought a farm produce!!</h2>
    </div>
    }
    </>
  )
}
