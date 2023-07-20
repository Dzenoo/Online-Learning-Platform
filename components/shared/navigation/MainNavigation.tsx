import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../form/Button";
import { createGraphicIcon } from "@/utility/helpers";

const MainNavigation: React.FC = () => {
  const isLoggedIn = true;

  return (
    <header className="p-4 shadow-md flex justify-between items-center sticky top-0 z-20 bg-white">
      <div className="w-fit">
        <Link href="/">
          <Image
            src="/assets/images/log.png"
            alt="logo"
            width={200}
            height={200}
          />
        </Link>
      </div>
      {isLoggedIn && (
        <nav className="flex gap-6 align-middle">
          <Link href="/courses" className="text-gray-400 font-light">
            Courses
          </Link>
          <Link href="/my-courses" className="text-gray-400 font-light">
            My Courses
          </Link>
          <Link href="/profile" className="text-gray-400 font-light">
            Profile
          </Link>
        </nav>
      )}
      {!isLoggedIn && (
        <nav className="flex gap-6 align-middle">
          <Link href="/" className="text-gray-400 font-light">
            Home
          </Link>
          <Link href="/courses" className="text-gray-400 font-light">
            About us
          </Link>
          <Link href="/" className="text-gray-400 font-light">
            Testimonials
          </Link>
          <Link href="/" className="text-gray-400 font-light">
            Contact us
          </Link>
        </nav>
      )}
      <div className="flex gap-6 items-center">
        {isLoggedIn && (
          <Link href="/cart" className="relative">
            {createGraphicIcon("/assets/graphics/shopping-cart.png", "cart")}
            <span className="w-6 h-6 bg-yellow-400 absolute rounded-full bottom-[18px] left-4 text-white font-bold text-sm text-center">
              <span className="relative top-[2.4px]">2</span>
            </span>
          </Link>
        )}
        {isLoggedIn && (
          <Link href="/favorites">
            {createGraphicIcon("/assets/graphics/heart.png", "favorite")}
          </Link>
        )}
        {isLoggedIn && (
          <Link href="/">
            {createGraphicIcon("/assets/graphics/bell.png", "notification")}
          </Link>
        )}
        {isLoggedIn && (
          <Button
            styleType="initial"
            type="button"
            disabled={false}
            isLink={false}
          >
            Logout
          </Button>
        )}
        {!isLoggedIn && (
          <Button
            styleType="initial"
            type="button"
            disabled={false}
            isLink={true}
            linkHref="login"
          >
            Sign In
          </Button>
        )}
        {!isLoggedIn && (
          <Button
            disabled={false}
            styleType="initial"
            type="button"
            isLink={true}
            linkHref="signup"
          >
            Sign Up
          </Button>
        )}
      </div>
    </header>
  );
};

export default MainNavigation;
