import {
  CouponEnum,
  CourseManagamentCreation,
  InstructorContextProviderType,
} from "@/types/instructor/InstructorContextTypes";
import React, { createContext, useState } from "react";

export const InstructorContext = createContext<InstructorContextProviderType>({
  courseManage: CourseManagamentCreation.Requirements,
  currentStep: 0,
  newCourseValues: {
    type: "",
    title: "",
    category: "",
    language: "",
    requirements: [],
    forCourse: [],
    captions: "",
    subtitle: "",
    description: "",
    image: "",
    level: "",
    price: 0,
    coupon: {
      discountType: CouponEnum.FixedCoupon,
      value: "",
      expiration: "",
      name: "",
    },
    sections: [],
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
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [courseCreationType, setcourseCreationType] = useState(
    CourseManagamentCreation.Requirements
  );
  const [newCourseValues, setnewCourseValues] = useState({
    type: "",
    title: "",
    category: "",
    language: "",
    requirements: [],
    forCourse: [],
    sections: [],
    captions: "",
    subtitle: "",
    description: "",
    image: "",
    level: "",
    price: 0,
    coupon: {
      discountType: CouponEnum.FixedCoupon,
      value: "",
      expiration: "",
      name: "",
    },
  });

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
