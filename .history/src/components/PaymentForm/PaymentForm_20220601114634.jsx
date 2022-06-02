import { CardElement } from "@stripe/react-stripe-js";

import Button from "../Button/Button";

const PaymentForm = () => {
  return (
    <div>
      <CardElement />
      <Button>Pay</Button>
    </div>
  );
};

export default PaymentForm;
