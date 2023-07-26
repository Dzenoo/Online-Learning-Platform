"use client";

import { CheckoutForm, CourseCheckout } from "@/components/checkout";
import ProtectedRoutes from "@/components/shared/auth/ProtectedRoutes";
import Button from "@/components/shared/form/Button";
import React from "react";

const CheckoutPage = () => {
  return (
    <section className="py-20 px-40 flex gap-12 items-stretch justify-center">
      <div className="basis-1/2">
        <h1 className="headingTitle">Checkout</h1>
        <h1 className="text-xl font-bold mt-2">Payment Details</h1>
        <CheckoutForm />
      </div>
      <div className="basis-1/3 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="headingTitle">Summary</h1>
          <p className="flex justify-between text-gray-400">
            Original Price: <span>$69.99</span>
          </p>
          <p className="flex justify-between text-gray-400">
            Discounts: <span>-$58.99</span>
          </p>
          <hr />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="headingTitle flex justify-between">
            Total <span>$12.99</span>
          </h1>
          <Button type="button" styleType="initial">
            Complete Checkout
          </Button>
        </div>
        <div>
          <h1 className="headingTitle">Order Details</h1>
          <CourseCheckout />
        </div>
      </div>
    </section>
  );
};

export default ProtectedRoutes(CheckoutPage, ["student"]);
