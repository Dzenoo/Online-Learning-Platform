import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../shared/form/Button";
import { createGraphicIcon } from "@/utility/helpers";

const MainNavigation: React.FC = () => {
  const isLoggedIn = true;

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
      {isLoggedIn && (
        <nav className="flex gap-6 align-middle">
          <Link href="/courses" className="text-gray-400 font-light">
            Courses
          </Link>
          <Link href="/" className="text-gray-400 font-light">
            My Courses
          </Link>
          <Link href="/" className="text-gray-400 font-light">
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
      <div className="flex gap-4 items-center">
        {isLoggedIn && (
          <Link href="/cart">
            {createGraphicIcon("/assets/graphics/shopping-cart.png", "cart")}
          </Link>
        )}
        {isLoggedIn && (
          <Link href="/">
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
