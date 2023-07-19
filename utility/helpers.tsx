import Image from "next/image";
import { ReactNode } from "react";

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
