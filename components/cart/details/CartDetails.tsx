import Button from "@/components/shared/form/Button";
import React from "react";

const CartDetails: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col gap-4 shadow-md p-4">
      <h1 className="font-bold text-2xl">Total:</h1>
      <div className="flex flex-col">
        <h1 className="headingTitle">${60}</h1>
        <span className="line-through text-gray-400 text-s">${200}</span>
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
