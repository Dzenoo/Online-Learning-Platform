import Button from "@/components/shared/form/Button";
import React from "react";

type CartDetails = {
  totalAmount: number;
};

const CartDetails: React.FC<CartDetails> = ({ totalAmount }) => {
  return (
    <div className="flex-grow flex flex-col justify-between gap-4 shadow-md p-4">
      <div className="flex justify-between items-center gap-3">
        <h1 className="font-bold text-2xl">Total:</h1>
        <h1 className="headingTitle">${totalAmount}</h1>
      </div>
      <Button
        isLink={true}
        linkHref="checkout"
        styleType="initial"
        type="button"
        disabled={false}
        additionalStyles="rounded-sm"
      >
        Checkout
      </Button>
    </div>
  );
};

export default CartDetails;
