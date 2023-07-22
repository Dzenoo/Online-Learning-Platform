import React from "react";
import { CartItemProps } from "@/types/cart/CartTypes";
import { convertToDiscountPrice, createGraphicIcon } from "@/utility/helpers";
import Image from "next/image";

const CartItem: React.FC<CartItemProps> = ({
  id,
  image,
  title,
  instructor,
  duration,
  skillLevel,
  lectures,
  language,
  price,
}) => {
  const discountedPrice = convertToDiscountPrice(price, 0.7) as number;

  return (
    <div className="flex justify-between gap-2 shadow-md mt-2" id={id}>
      <div className="flex gap-4">
        <Image src={image} alt={title} width={200} height={200} />
        <div className="flex flex-col gap-6 p-2">
          <div>
            <h1 className="headingTitle">{title}</h1>
            <p className="text-gray-400">{instructor}</p>
          </div>
          <div className="flex items-center gap-2">
            {createGraphicIcon("/assets/graphics/language.png", "language")}
            <h2>
              Language: <strong>{language}</strong>
            </h2>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-gray-400">{duration}</h2>
            <h2 className="text-gray-400">{lectures} lectures</h2>
            <h2 className="text-gray-400">{skillLevel}</h2>
          </div>
        </div>
      </div>
      <div className="flex gap-4 pr-6 pt-4">
        <div>
          <h2 className="text-red-700 cursor-pointer">Remove</h2>
          <h2 className="text-yellow-400 cursor-pointer">Move to wishlist</h2>
        </div>
        <div className="flex flex-col items-end">
          <h1 className="headingTitle">${discountedPrice}</h1>
          <span className="line-through text-gray-400 text-s">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
