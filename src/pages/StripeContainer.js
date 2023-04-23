import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm' 
import { useLocation } from 'react-router-dom'

const PUBLIC_KEY ="pk_test_51MzF2ISA9p1He6kUHEMzYEpD1kHFUAJbpEMETeNiOAKEyCuQtqTMpbCC4EfN5lbkYiYEpq6GdzjxevRUwKU2HZ7X00Y7F2UQJY"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer() {
  const {state} = useLocation();
  console.log("value:",state.value)
  return (
    <Elements stripe = {stripeTestPromise}>
        <PaymentForm price={state.value} />
    </Elements>
  )
}
