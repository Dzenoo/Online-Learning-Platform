"use client";
import {
  BasicInfo,
  Captions,
  Coupons,
  Curriculum,
  Messages,
  NewCourseSidebar,
  Pricing,
  Requirements,
} from "@/components/instructor";
import { InstructorContext } from "@/context/InstructorContext";
import { CourseManagamentCreation } from "@/types/InstructorContextTypes";
import React, { useContext, useEffect } from "react";

const Manage = () => {
  const { newCourseValues, setCurrentStep, setCourseManage, courseManage } =
    useContext(InstructorContext);

  useEffect(() => {
    setCurrentStep(0);
  }, []);

  return (
    <section className="p-20 flex justify-center items-stretch gap-4">
      <NewCourseSidebar setCourseManage={setCourseManage} />
      <div className="border basis-1/2">
        {courseManage === CourseManagamentCreation.Requirements && (
          <Requirements />
        )}
        {courseManage === CourseManagamentCreation.Curriculum && <Curriculum />}
        {courseManage === CourseManagamentCreation.Captions && <Captions />}
        {courseManage === CourseManagamentCreation.Basics && <BasicInfo />}
        {courseManage === CourseManagamentCreation.Pricing && <Pricing />}
        {courseManage === CourseManagamentCreation.Coupons && <Coupons />}
        {courseManage === CourseManagamentCreation.Messages && <Messages />}
      </div>
    </section>
  );
};

export default Manage;
