"use client";

import {
  ActionType,
  ActionTypes,
  ValidatorState,
  ValidatorTypes,
} from "@/types/ValidatorHookTypes";
import { validate } from "@/utility/validators";
import React, { useReducer } from "react";

const initialState: ValidatorState = {
  value: "",
  isValid: false,
  isTouched: false,
};

const reducer = (state: ValidatorState, action: ActionTypes) => {
  switch (action.type) {
    case ActionType.INPUT_CHANGE: {
      return {
        ...state,
        value: action.payload,
        isValid: validate(action.payload, action.validators),
      };
    }
    case ActionType.INPUT_BLUR: {
      return {
        ...state,
        isTouched: true,
      };
    }
    default: {
      return state;
    }
  }
};
export const useValidation = (validators: ValidatorTypes[]) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    dispatch({
      type: ActionType.INPUT_CHANGE,
      payload: e.target.value,
      validators: validators,
    });
  };

  const onBlurHandler = (): void => {
    dispatch({
      type: ActionType.INPUT_BLUR,
      payload: "",
      validators: [],
    });
  };

  return {
    value: state.value,
    isTouched: state.isTouched,
    isValid: state.isValid,
    onChangeHandler,
    onBlurHandler,
  };
};
