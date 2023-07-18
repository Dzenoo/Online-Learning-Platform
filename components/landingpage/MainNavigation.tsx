import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ui/formElements/Button";

const MainNavigation: React.FC = () => {
  return (
    <header className="p-4 shadow-md flex justify-between items-center sticky top-0 z-20 bg-white">
      <div className="w-fit">
        <Image
          src="/assets/images/log.png"
          alt="logo"
          width={200}
          height={200}
        />
      </div>
      <nav className="flex gap-6 align-middle">
        <Link href="/" className="text-gray-400 font-light">
          Home
        </Link>
        <Link href="/" className="text-gray-400 font-light">
          About us
        </Link>
        <Link href="/" className="text-gray-400 font-light">
          Testimonials
        </Link>
        <Link href="/" className="text-gray-400 font-light">
          Contact us
        </Link>
      </nav>
      <div className="flex gap-2">
        <Button
          value="Sign In"
          styleType="initial"
          type="button"
          disabled={false}
          isLink={true}
          linkHref="login"
        />
        <Button
          value="Sign Up"
          disabled={false}
          styleType="initial"
          type="button"
          isLink={true}
          linkHref="signup"
        />
      </div>
    </header>
  );
};

export default MainNavigation;
