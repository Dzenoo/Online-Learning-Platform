"use client";
import { NewCourseSidebar } from "@/components/instructor";
import { InstructorContext } from "@/context/InstructorContext";
import React, { useContext, useEffect } from "react";

const Manage = () => {
  const { newCourseValues, setCurrentStep } = useContext(InstructorContext);

  useEffect(() => {
    setCurrentStep(0);
  }, []);

  return (
    <section className="p-20 flex justify-center items-stretch gap-4">
      <NewCourseSidebar />
      <div className="border basis-1/2">CARD</div>
    </section>
  );
};

export default Manage;
