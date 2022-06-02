import styled from "styled-components";

import Button from "../Button/Button";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid green;

`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  border: 1px solid green;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
