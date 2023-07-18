import Image from "next/image";
import React from "react";

const AfterHero: React.FC = () => {
  return (
    <section className="mt-2 px-12 flex flex-col justify-center items-center flex-wrap text-center">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="font-extrabold text-black text-4xl">
          Unlock the Power of Learning with{" "}
          <span className="yellowText">ExpertEase</span>
        </h1>
        <p className="text-gray-400 font-light text-lg">
          Discover a diverse range of courses taught by industry experts and
          leading educators.
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 flex-wrap">
        <div className="flex flex-col gap-2 text-center items-center justify-center p-2 w-96 mt-12">
          <Image
            src="/assets/graphics/learning.png"
            alt="learning"
            width={130}
            height={130}
          />
          <h2 className="font-bold text-2xl text-black">
            Flexible Learning Options
          </h2>
          <p className="text-md text-gray-400">
            Learn at your own pace, on any device, and from anywhere in the
            world.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center p-2 w-96 mt-12">
          <Image
            src="/assets/graphics/graduation.png"
            alt="learning"
            width={130}
            height={130}
          />
          <h2 className="font-bold text-2xl text-black">Expert Instructors</h2>
          <p className="text-md text-gray-400">
            Gain insights from industry experts and experienced educators
          </p>
        </div>
        <div className="flex flex-col gap-2 text-center items-center justify-center p-2 w-96 mt-12">
          <Image
            src="/assets/graphics/book.png"
            alt="learning"
            width={130}
            height={130}
          />
          <h2 className="font-bold text-2xl text-black">
            Diverse Course Selection
          </h2>
          <p className="text-md text-gray-400">
            Explore a wide range of subjects and disciplines tailored to suit
            your interests
          </p>
        </div>
      </div>
    </section>
  );
};
export default AfterHero;
