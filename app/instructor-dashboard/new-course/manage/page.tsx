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
  const {
    newCourseValues,
    setCurrentStep,
    setCourseManage,
    courseManage,
    setnewCourseValues,
  } = useContext(InstructorContext);

  useEffect(() => {
    setCurrentStep(0);
  }, []);

  console.log(newCourseValues);

  return (
    <section className="p-20 flex justify-center items-stretch gap-12">
      <NewCourseSidebar setCourseManage={setCourseManage} />
      <div className="basis-1/2">
        {courseManage === CourseManagamentCreation.Requirements && (
          <Requirements
            setnewCourseValues={setnewCourseValues}
            newCourseValues={newCourseValues}
          />
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
