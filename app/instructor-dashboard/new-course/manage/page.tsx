"use client";
import {
  BasicInfo,
  Captions,
  Coupons,
  Curriculum,
  NewCourseSidebar,
  Pricing,
  Requirements,
} from "@/components/instructor";
import { InstructorContext } from "@/context/InstructorContext";
import { CourseManagamentCreation } from "@/types/instructor/InstructorContextTypes";
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

  const isCourseBasicsCreated =
    newCourseValues.type === "" &&
    newCourseValues.title === "" &&
    newCourseValues.language === "" &&
    newCourseValues.category === "";

  return (
    <section className="p-20 flex justify-center items-stretch gap-12">
      {!isCourseBasicsCreated && (
        <NewCourseSidebar
          setCourseManage={setCourseManage}
          isFilledCurriculum={newCourseValues.sections.length > 0}
          isFilledRequirements={
            newCourseValues.requirements.length > 0 &&
            newCourseValues.forCourse.length > 0
          }
          isFilledCaptions={newCourseValues.captions !== ""}
          isFilledBasic={
            newCourseValues.title !== "" &&
            newCourseValues.subtitle !== "" &&
            newCourseValues.description !== "" &&
            newCourseValues.language !== "" &&
            newCourseValues.category !== "" &&
            newCourseValues.image !== ""
          }
          isFilledPrice={newCourseValues.price !== 0}
          isFilledCoupon={newCourseValues.coupon.name !== ""}
        />
      )}
      {!isCourseBasicsCreated && (
        <div className="basis-1/2">
          {courseManage === CourseManagamentCreation.Requirements && (
            <Requirements
              setnewCourseValues={setnewCourseValues}
              newCourseValues={newCourseValues}
            />
          )}
          {courseManage === CourseManagamentCreation.Curriculum && (
            <Curriculum
              newCourseValues={newCourseValues}
              setnewCourseValues={setnewCourseValues}
            />
          )}
          {courseManage === CourseManagamentCreation.Captions && (
            <Captions setnewCourseValues={setnewCourseValues} />
          )}
          {courseManage === CourseManagamentCreation.Basics && (
            <BasicInfo
              newCourseValues={newCourseValues}
              setnewCourseValues={setnewCourseValues}
            />
          )}
          {courseManage === CourseManagamentCreation.Pricing && (
            <Pricing setnewCourseValues={setnewCourseValues} />
          )}
          {courseManage === CourseManagamentCreation.Coupons && (
            <Coupons
              newCourseValues={newCourseValues}
              setnewCourseValues={setnewCourseValues}
            />
          )}
        </div>
      )}
      {isCourseBasicsCreated && (
        <div className="py-48">
          <h1 className="font-bold">
            Please create course first to edit and add more information
          </h1>
        </div>
      )}
    </section>
  );
};

export default Manage;
