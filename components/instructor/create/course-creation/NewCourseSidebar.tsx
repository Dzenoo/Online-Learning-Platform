import Button from "@/components/shared/form/Button";
import { CourseManagamentCreation } from "@/types/InstructorContextTypes";
import React from "react";

const NewCourseSidebar = ({
  setCourseManage,
}: {
  setCourseManage: React.Dispatch<
    React.SetStateAction<CourseManagamentCreation>
  >;
}) => {
  return (
    <nav className="p-2 basis-1/6 flex flex-col gap-6">
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 className="font-bold text-xl mb-2">Create Your Course</h1>
        <button
          className={`font-light text-md text-gray-700`}
          onClick={() => setCourseManage(CourseManagamentCreation.Requirements)}
        >
          Requirements
        </button>
        <button
          className={`font-light text-md text-gray-700`}
          onClick={() => setCourseManage(CourseManagamentCreation.Curriculum)}
        >
          Curriculum
        </button>
        <button
          className={`font-light text-md text-gray-700`}
          onClick={() => setCourseManage(CourseManagamentCreation.Captions)}
        >
          Captions
        </button>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 className="font-bold text-xl mb-2">Publish Your Course</h1>
        <button
          className={`font-light text-md text-gray-700`}
          onClick={() => setCourseManage(CourseManagamentCreation.Basics)}
        >
          Basic Info
        </button>
        <button
          className={`font-light text-md text-gray-700`}
          onClick={() => setCourseManage(CourseManagamentCreation.Pricing)}
        >
          Set Price
        </button>
        <button
          className={`font-light text-md text-gray-700`}
          onClick={() => setCourseManage(CourseManagamentCreation.Coupons)}
        >
          Coupons
        </button>
        <button
          className={`font-light text-md text-gray-700`}
          onClick={() => setCourseManage(CourseManagamentCreation.Messages)}
        >
          Messages
        </button>
      </div>
      <div>
        <Button styleType="initial" type="button" additionalStyles="rounded-sm">
          Submit Creation
        </Button>
      </div>
    </nav>
  );
};

export default NewCourseSidebar;