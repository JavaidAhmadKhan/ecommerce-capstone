import styled from "styled-components";

import Button from "../Button/Button";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
  /* min-height: 100px; */
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  box-shadow: 5px 5px 10px 5px rgb(0 0 0 / 20%);
  border-radius: 10px;
  margin: 10px;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
