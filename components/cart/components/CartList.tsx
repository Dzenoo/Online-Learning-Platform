import { CartItemProps, CartListProps } from "@/types/cart/CartTypes";
import React from "react";
import CartItem from "./CartItem";

const CartList: React.FC<CartListProps> = ({ cartCourses }) => {
  return (
    <div className="flex-grow basis-1/2">
      {cartCourses.map((course: CartItemProps) => (
        <CartItem
          key={course.id}
          id={course.id}
          title={course.title}
          image={course.image}
          duration={course.duration}
          instructor={course.instructor}
          language={course.language}
          price={course.price}
          lectures={course.lectures}
          skillLevel={course.skillLevel}
        />
      ))}
    </div>
  );
};

export default CartList;
