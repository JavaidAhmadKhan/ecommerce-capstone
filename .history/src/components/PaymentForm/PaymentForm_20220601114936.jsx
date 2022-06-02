import { CardElement } from "@stripe/react-stripe-js";

import { BUTTON_TYPE_CLASSES, Button } from "../Button/Button";

const PaymentForm = () => {
  return (
    <div>
      <CardElement />
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay</Button>
    </div>
  );
};

export default PaymentForm;
