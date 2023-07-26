"use client";

import { CartDetails, CartList } from "@/components/cart";
import { CourseList } from "@/components/courses";
import ProtectedRoutes from "@/components/shared/auth/ProtectedRoutes";
import { CartData, CoursesData } from "@/data/coursesdata.config";
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
      <div className="mt-20">
        <h1 className="font-bold text-4xl">You might also like</h1>
        <CourseList courses={CoursesData} />
      </div>
    </section>
  );
};

export default ProtectedRoutes(CartPage, ["student"]);
