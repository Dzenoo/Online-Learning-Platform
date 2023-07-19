import { CartDetails, CartList } from "@/components/cart";
import { CartData } from "@/data/coursesdata.config";
import React from "react";

const CartPage = () => {
  return (
    <section className="p-6 px-40 border flex flex-col gap-2 items-stretch justify-center">
      <div className="mt-6">
        <h1 className="headingTitle">Shopping Cart</h1>
        <p className="text-gray-400 mt-4">2 Courses in Cart</p>
      </div>
      <hr />
      <div className="flex items-stretch justify-center gap-2">
        <CartList cartCourses={CartData} />
        <CartDetails />
      </div>
      <div className="border pt-6">
        <h1>You might also like</h1>
      </div>
    </section>
  );
};

export default CartPage;
