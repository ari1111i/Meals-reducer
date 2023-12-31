import React, { useState, useReducer } from "react";
import { styled } from "styled-components";
import { Button } from "../UI/Button";
import { SystemIcon } from "../../assets";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'submit':
      return {
        ...state,
      };
      default:
        return state;
  }
};

export const MealItemForm = ({ inputId, onAddMeal }) => {
  const [enteredAmount, setEnteredAmount] = useState(1);
  const amountChangeHnadler = (e) => {
    setEnteredAmount(Number(e.target.value));
  };

  const addSubmit = (e) => {
    e.preventDefault();
    onAddMeal(enteredAmount);
    setEnteredAmount(1);
  };

  return (
    <FormContainer onSubmit={addSubmit}>
      <InputWrapper>
        <label htmlFor={inputId}>AMOUNT</label>
        <input
          type="number"
          id={inputId}
          min="1"
          max="5"
          value={enteredAmount}
          onChange={amountChangeHnadler}
        />
      </InputWrapper>
      <Button type="BUTTON_CHANGE" IconComponent={SystemIcon} size="small">
        ADD
      </Button>
    </FormContainer>
  );
};

const FormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
`;

const InputWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 20px;
  label {
    font-size: 18px;
    color: #222222;
    font-weight: 600;
  }
  input {
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    max-width: 60px;
    width: 100%;
    height: 32px;
    outline: none;
    padding: 4px 12px;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
  }
`;
