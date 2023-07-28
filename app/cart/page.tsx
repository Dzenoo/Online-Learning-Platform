"use client";

import { CartDetails, CartList } from "@/components/cart";
import { CourseList } from "@/components/courses";
import ProtectedRoutes from "@/components/shared/auth/ProtectedRoutes";
import { StudentContext } from "@/context/StudentContext";
import useSwr from "swr";
import React, { useContext } from "react";

const CartPage = () => {
  const { studentData } = useContext(StudentContext);
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());
  const { data: coursesData } = useSwr("/api/courses", fetcher);

  return (
    <section className="p-6 px-40 border flex flex-col gap-2 items-stretch justify-center">
      <div className="mt-6">
        <h1 className="headingTitle">Shopping Cart</h1>
        <p className="text-gray-400 mt-4">
          {studentData?.cart.items.length} Course in Cart
        </p>
      </div>
      <hr />
      <div className="flex items-stretch justify-center gap-2">
        <CartList cartCourses={studentData?.cart.items} />
        <CartDetails totalAmount={studentData?.cart.totalAmount} />
      </div>
      <div className="mt-20">
        <h1 className="font-bold text-4xl">You might also like</h1>
        <CourseList
          courses={coursesData?.filter((data: any) =>
            studentData?.cart.items.includes(data._id)
          )}
        />
      </div>
    </section>
  );
};

export default ProtectedRoutes(CartPage, ["student"]);
