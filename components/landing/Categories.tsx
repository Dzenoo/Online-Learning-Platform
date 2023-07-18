import Image from "next/image";
import React from "react";

const Categories: React.FC = () => {
  return (
    <section className="flex flex-col gap-2 justify-start items-start p-12 mt-12">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-4xl font-bold">
          Explore Course <span className="yellowText">Categories</span>
        </h1>
        <p className="text-md text-gray-400">
          Explore various courses by categories and filters
        </p>
      </div>
      <div className="flex justify-center items-center gap-12 text-center w-full">
        <div className="bg-white shadow-md p-7 flex justify-center items-center gap-2 cursor-pointer hover:shadow-lg transition-all">
          <Image
            src="/assets/graphics/promotion.png"
            width={100}
            height={100}
            alt="img"
          />
          <h1 className="font-bold text-xl">Design And Development</h1>
        </div>
        <div className="bg-white shadow-md p-7 flex justify-center items-center gap-2 cursor-pointer hover:shadow-lg transition-all">
          <Image
            src="/assets/graphics/web-design.png"
            width={100}
            height={100}
            alt="img"
          />
          <h1 className="font-bold text-xl">Digital Marketing</h1>
        </div>
        <div className="bg-white shadow-md p-7 flex justify-center items-center gap-2 cursor-pointer hover:shadow-lg transition-all">
          <Image
            src="/assets/graphics/portfolio.png"
            width={100}
            height={100}
            alt="img"
          />
          <h1 className="font-bold text-xl">Bussiness and consulting</h1>
        </div>
      </div>
    </section>
  );
};

export default Categories;
