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
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  box-shadow: 5px 5px 10px 5px rgb(0 0 0 / 20%);
  border-radius: 10px;
  margin: 20px;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  h2 {
    font-size: 24px;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    height: 80px;
    min-width: 250px;

    h2 {
      font-size: 16px;
      font-weight: bold;
    }
  }
`;

export const PaymentButton = styled(Button)`
  display: flex;
  margin-left: auto;
  margin-top: 30px;
  padding: 15px 25px;
  background-color: #3256a8;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-top: 70px;
    padding: 10px 20px;
  }
`;
