import { CardElement } from "@stripe/react-stripe-js";

import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button";

const PaymentForm = () => {
  return (
    <div>
      <CardElement />
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay</Button>
    </div>
  );
};

export default PaymentForm;
