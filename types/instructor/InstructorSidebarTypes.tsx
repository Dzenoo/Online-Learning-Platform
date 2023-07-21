import React from "react";
import { CourseManagamentCreation } from "./InstructorContextTypes";

export interface NewCourseSidebarProps {
  setCourseManage: React.Dispatch<
    React.SetStateAction<CourseManagamentCreation>
  >;
  isFilledRequirements: boolean;
}
