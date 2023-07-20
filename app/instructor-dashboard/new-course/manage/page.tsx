"use client";
import { InstructorContext } from "@/context/InstructorContext";
import React, { useContext, useEffect } from "react";

const Manage = () => {
  const { newCourseValues, setCurrentStep } = useContext(InstructorContext);

  useEffect(() => {
    setCurrentStep(0);
  }, []);

  return (
    <div>
      {newCourseValues.type}
      {newCourseValues.title}
      {newCourseValues.category}
      {newCourseValues.language}
    </div>
  );
};

export default Manage;
