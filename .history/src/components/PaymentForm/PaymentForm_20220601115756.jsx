import { CardElement } from "@stripe/react-stripe-js";

import Button from "../Button/Button";

import { BUTTON_TYPE_CLASSES } from "../Button/Button";

import "./payment-form.scss";

const PaymentForm = () => {
  return (
    <div className="paymentFormContainer">
      <div className="paymentForm">
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </div>
    </div>
  );
};

export default PaymentForm;
