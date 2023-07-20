import { InstructorContextType } from "@/types/InstructorContextTypes";
import React, { createContext, useState } from "react";

export const InstructorContext = createContext<InstructorContextType>({
  currentStep: 0,
  newCourseValues: {
    type: "",
    title: "",
    category: "",
    language: "",
  },
  setCurrentStep: () => {},
  setnewCourseValues: () => {},
});

export const InstructorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [newCourseValues, setnewCourseValues] = useState({
    type: "",
    title: "",
    category: "",
    language: "",
  });

  return (
    <InstructorContext.Provider
      value={{
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
