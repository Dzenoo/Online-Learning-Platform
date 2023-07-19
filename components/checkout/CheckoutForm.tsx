"use client";

import React from "react";
import Input from "../shared/form/Input";
import { InputType } from "@/types/InputTypes";
import { useValidation } from "@/hooks/useValidation";
import { VALIDATOR_REQUIRE } from "@/utility/validators";

const CheckoutForm = () => {
  const email = useValidation([VALIDATOR_REQUIRE()]);
  const credit_card_num = useValidation([VALIDATOR_REQUIRE()]);
  const expiration = useValidation([VALIDATOR_REQUIRE()]);
  const cvv = useValidation([VALIDATOR_REQUIRE()]);

  return (
    <form className="py-4">
      <Input
        type={InputType.Input}
        label="Email Address"
        placeholder="user@gmail.com"
        error={!email.isValid && email.isTouched}
        id="email"
        value={email.value}
        onChange={email.onChangeHandler}
        onBlur={email.onBlurHandler}
        helperText="Please enter valid email"
      />
      <Input
        type={InputType.Input}
        label="Credit Card Number"
        placeholder="**** **** **** ****"
        error={!credit_card_num.isValid && credit_card_num.isTouched}
        id="credit_card_num"
        value={credit_card_num.value}
        onChange={credit_card_num.onChangeHandler}
        onBlur={credit_card_num.onBlurHandler}
        helperText="Please enter valid number"
      />
      <div className="flex">
        <div className="basis-1/2">
          <Input
            type={InputType.Input}
            label="Expiration Date"
            placeholder="00/00"
            error={!expiration.isValid && expiration.isTouched}
            id="expiration"
            value={expiration.value}
            onChange={expiration.onChangeHandler}
            onBlur={expiration.onBlurHandler}
            helperText="Please enter valid expiration"
          />
        </div>
        <div className="basis-1/2">
          <Input
            type={InputType.Input}
            label="CVV"
            placeholder="***"
            error={!cvv.isValid && cvv.isTouched}
            id="cvv"
            value={cvv.value}
            onChange={cvv.onChangeHandler}
            onBlur={cvv.onBlurHandler}
            helperText="Please enter valid cvv"
          />
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
