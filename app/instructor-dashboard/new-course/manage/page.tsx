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

  const isCourseCreated =
    newCourseValues.type === "" &&
    newCourseValues.title === "" &&
    newCourseValues.language === "" &&
    newCourseValues.category === "";

  console.log(newCourseValues);

  return (
    <section className="p-20 flex justify-center items-stretch gap-12">
      <NewCourseSidebar
        setCourseManage={setCourseManage}
        isFilledRequirements={
          newCourseValues.requirements.length > 0 &&
          newCourseValues.forCourse.length > 0
        }
      />
      <div className="basis-1/2 flex-grow">
        {courseManage === CourseManagamentCreation.Requirements && (
          <Requirements
            setnewCourseValues={setnewCourseValues}
            newCourseValues={newCourseValues}
          />
        )}
        {courseManage === CourseManagamentCreation.Curriculum && <Curriculum />}
        {courseManage === CourseManagamentCreation.Captions && (
          <Captions setnewCourseValues={setnewCourseValues} />
        )}
        {courseManage === CourseManagamentCreation.Basics && (
          <BasicInfo
            newCourseValues={newCourseValues}
            setnewCourseValues={setnewCourseValues}
          />
        )}
        {courseManage === CourseManagamentCreation.Pricing && <Pricing />}
        {courseManage === CourseManagamentCreation.Coupons && <Coupons />}
        {courseManage === CourseManagamentCreation.Messages && <Messages />}
      </div>
      {/* {!isCourseCreated && (
        <NewCourseSidebar setCourseManage={setCourseManage} />
      )}
      {!isCourseCreated && (
        <div className="basis-1/2">
          {courseManage === CourseManagamentCreation.Requirements && (
            <Requirements
              setnewCourseValues={setnewCourseValues}
              newCourseValues={newCourseValues}
            />
          )}
          {courseManage === CourseManagamentCreation.Curriculum && (
            <Curriculum />
          )}
          {courseManage === CourseManagamentCreation.Captions && <Captions />}
          {courseManage === CourseManagamentCreation.Basics && <BasicInfo />}
          {courseManage === CourseManagamentCreation.Pricing && <Pricing />}
          {courseManage === CourseManagamentCreation.Coupons && <Coupons />}
          {courseManage === CourseManagamentCreation.Messages && <Messages />}
        </div>
      )}
      {isCourseCreated && (
        <div className="py-48">
          <h1 className="font-bold">
            Please create course first to edit and add more information
          </h1>
        </div>
      )} */}
    </section>
  );
};

export default Manage;
