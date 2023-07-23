import {
  CouponEnum,
  CourseManagamentCreation,
  InstructorContextProviderType,
} from "@/types/instructor/InstructorContextTypes";
import React, { FormEvent, createContext, useState } from "react";

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
  submitCreateCourseHandler: (e) => {},
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

  function submitCreateCourseHandler(e: FormEvent): void {
    e.preventDefault();
    const formData = new FormData();

    formData.append("type", newCourseValues.type);
    formData.append("title", newCourseValues.title);
    formData.append("category", newCourseValues.category);
    formData.append("language", newCourseValues.language);
    formData.append(
      "requirements",
      JSON.stringify(newCourseValues.requirements)
    );
    formData.append("forCourse", JSON.stringify(newCourseValues.forCourse));
    formData.append("sections", JSON.stringify(newCourseValues.sections));
    formData.append("captions", newCourseValues.captions);
    formData.append("subtitle", newCourseValues.subtitle);
    formData.append("description", newCourseValues.description);
    formData.append("image", newCourseValues.image);
    formData.append("level", newCourseValues.level);
    formData.append("price", newCourseValues.price.toString());
    formData.append("coupon", JSON.stringify(newCourseValues.coupon));
    console.log(formData.values);
  }

  return (
    <InstructorContext.Provider
      value={{
        courseManage: courseCreationType,
        setCourseManage: setcourseCreationType,
        currentStep,
        setCurrentStep,
        newCourseValues,
        setnewCourseValues,
        submitCreateCourseHandler,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};
