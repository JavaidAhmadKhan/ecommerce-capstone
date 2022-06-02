import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button from "../Button/Button";

import { BUTTON_TYPE_CLASSES } from "../Button/Button";

import "./payment-form.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    
    }
const response = await fetch('/.netlify/functions/create-payment-intent', {
  method: 'POST',})

  };

  return (
    <div className="paymentFormContainer">
      <div className="paymentForm">
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </div>
    </div>
  );
};

export default PaymentForm;
