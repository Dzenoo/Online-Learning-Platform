import { FooterData } from "@/data/footerdata.config";
import { FooterProps } from "@/types/FooterTypes";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-2 shadow-md flex gap-2 justify-between p-12 mt-12">
      <div className="w-1/3">
        <Image
          src="/assets/images/log.png"
          width={200}
          height={200}
          alt="logo"
        />
        <p className="text-gray-400 font-light">
          Explore our wide range of courses and unlock your learning potential
          with our online learning platform. Gain new skills, expand your
          knowledge, and achieve your goals with expert instructors and a
          supportive learning community.
        </p>
      </div>
      {FooterData.map((data) => (
        <div key={data.title}>
          <h1 className="font-bold text-2xl mb-6">{data.title}</h1>
          <ul className="flex flex-col gap-2">
            {data.links.map((link: FooterProps) => (
              <li
                className="text-light text-black cursor-pointer"
                key={link.id}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
