import Image from "next/image";
import React, { ReactNode, SetStateAction } from "react";

export function convertToDiscountPrice(
  currentPrice: number,
  discount: number
): number {
  const discountAmount = currentPrice * discount;
  const discountedPrice = currentPrice - discountAmount;
  return discountedPrice;
}

export function createGraphicIcon(source: string, alt: string): ReactNode {
  return <Image src={source} alt={alt} width={40} height={40} />;
}

export function removeRequirementHandler(
  indexToRemove: number,
  setStateAction: React.Dispatch<SetStateAction<any>>,
  stateKey: string
): void {
  setStateAction((prevState: any) => {
    const updatedState = prevState[stateKey].filter(
      (_: any, index: number) => index !== indexToRemove
    );

    return {
      ...prevState,
      [stateKey]: updatedState,
    };
  });
}
