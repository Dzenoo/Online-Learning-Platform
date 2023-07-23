import Image from "next/image";
import React, { ReactNode, SetStateAction } from "react";
import { hash, compare } from "bcryptjs";

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

export function addRequirementHandler(
  setStateAction: React.Dispatch<SetStateAction<any>>,
  stateKey: string,
  newValue: string
): void {
  setStateAction((prevState: any) => ({
    ...prevState,
    [stateKey]: [...prevState[stateKey], newValue],
  }));
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

export async function hashPassword(password: string) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

export function responseMessage(message: string, status: number) {
  return new Response(JSON.stringify({ message: message }), { status: status });
}

export function responseJson(data: any, status: number) {
  return new Response(JSON.stringify(data), { status: status });
}
