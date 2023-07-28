"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import Button from "../form/Button";
import { createGraphicIcon, getAuthData } from "@/utility/helpers";
import { useAuth } from "@/hooks/useAuth";
import { StudentContext } from "@/context/StudentContext";

const MainNavigation: React.FC = () => {
  const { studentData } = useContext(StudentContext);

  const { logout } = useAuth();
  const authData = getAuthData();

  const isInstructor = authData?.typeAuth === "instructor";
  const isStudent = authData?.typeAuth === "student";

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
      {isStudent && (
        <div className="flex gap-6 align-middle">
          <Link href="/courses" className="text-gray-400 font-light">
            Courses
          </Link>
          <Link href="/my-courses" className="text-gray-400 font-light">
            My Courses
          </Link>
        </div>
      )}
      {isInstructor && (
        <Link href="/instructor-dashboard" className="text-gray-400 font-light">
          Dashboard
        </Link>
      )}
      {!authData?.authToken && (
        <div className="flex gap-6 align-middle">
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
        </div>
      )}
      <div className="flex gap-6 items-center">
        {isStudent && (
          <Link href="/cart" className="relative">
            {createGraphicIcon("/assets/graphics/shopping-cart.png", "cart")}
            <span className="w-6 h-6 bg-yellow-400 absolute rounded-full bottom-[18px] left-4 text-white font-bold text-sm text-center">
              <span className="relative top-[2.4px]">
                {studentData?.cart.items.length}
              </span>
            </span>
          </Link>
        )}
        {isStudent && (
          <Link href="/favorites">
            {createGraphicIcon("/assets/graphics/heart.png", "favorite")}
          </Link>
        )}
        {isStudent && (
          <Link href="/notifications">
            {createGraphicIcon("/assets/graphics/bell.png", "notification")}
          </Link>
        )}
        {authData?.authToken && (
          <Button
            styleType="initial"
            type="button"
            disabled={false}
            isLink={false}
            onClick={logout}
          >
            Logout
          </Button>
        )}
        {!authData?.authToken && (
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
        {!authData?.authToken && (
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
