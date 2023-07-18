import React, { ReactNode } from "react";

const Card = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles: string;
}) => {
  return (
    <div className={`bg-white shadow-md w-fit p-3 rounded-md ${styles}`}>
      {children}
    </div>
  );
};

export default Card;
