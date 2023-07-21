import {
  CourseManagamentCreation,
  InstructorContextType,
} from "@/types/InstructorContextTypes";
import React, { createContext, useEffect, useState } from "react";

export const InstructorContext = createContext<InstructorContextType>({
  courseManage: CourseManagamentCreation.Requirements,
  currentStep: 0,
  newCourseValues: {
    type: "",
    title: "",
    category: "",
    language: "",
    requirements: [],
    forCourse: "",
  },
  setCourseManage: () => {},
  setCurrentStep: () => {},
  setnewCourseValues: () => {},
});

export const InstructorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [courseCreationType, setcourseCreationType] = useState(
    CourseManagamentCreation.Requirements
  );
  const [newCourseValues, setnewCourseValues] = useState(
    JSON.parse(localStorage.getItem("new-value-course")!) || {
      type: "",
      title: "",
      category: "",
      language: "",
      requirements: [],
      forCourse: "",
    }
  );

  useEffect(() => {
    localStorage.setItem("new-value-course", JSON.stringify(newCourseValues));
  }, [newCourseValues]);

  return (
    <InstructorContext.Provider
      value={{
        courseManage: courseCreationType,
        setCourseManage: setcourseCreationType,
        currentStep,
        setCurrentStep,
        newCourseValues,
        setnewCourseValues,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};
