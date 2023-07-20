import React from "react";
import Button from "../shared/form/Button";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="px-12 flex justify-between items-center flex-wrap">
      <div className="w-2/4 flex flex-col gap-9">
        <h1 className="font-extrabold text-black text-6xl">
          Discover Endless <span className="yellowText">Possibilities</span> for{" "}
          <span className="yellowText">Growth</span> and Success
        </h1>
        <p className="text-gray-400 font-light text-2xl">
          Discover a Vast Array of Engaging Courses and Expert Instructors,
          Empowering You to Cultivate New Skills and Pursue Your Passion
        </p>
        <div className="w-60">
          <Button
            type="button"
            styleType="initial"
            isLink={true}
            linkHref="courses"
          >
            Browse Courses
          </Button>
        </div>
      </div>
      <div className="w-2/6">
        <Image
          src="/assets/images/hero-img.png"
          alt="hero"
          width={700}
          height={700}
        />
      </div>
    </section>
  );
};

export default Hero;
