import { CardElement } from "@stripe/react-stripe-js";

import Button from "../Button/Button";

import { BUTTON_TYPE_CLASSES } from "../Button/Button";

const PaymentForm = () => {
  return (
    <div>
      <CardElement />
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
    </div>
  );
};

export default PaymentForm;
