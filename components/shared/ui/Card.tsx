import React, { ReactNode } from "react";

const Card = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: string;
}) => {
  return (
    <div className={`bg-white shadow-md w-96 h-max p-3 rounded-md ${styles}`}>
      {children}
    </div>
  );
};

export default Card;
