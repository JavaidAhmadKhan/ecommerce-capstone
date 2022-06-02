import { CardElement } from "@stripe/react-stripe-js";

import Button from "../Button/Button";

import { BUTTON_TYPE_CLASSES } from "../Button/Button";

import "./payment-form.scss";

const PaymentForm = () => {
  return (
    <div className='paymentFormContainer'>
      <CardElement />
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} className='formContainer'>Pay Now</Button>
    </div>
  );
};

export default PaymentForm;
