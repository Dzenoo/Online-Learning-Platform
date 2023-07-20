import React from "react";
import Button from "../shared/form/Button";

const InstructorNav = () => {
  return (
    <nav className="w-full flex gap-2 p-4 bg-slate-900 justify-center">
      <Button
        isLink={true}
        type="button"
        styleType="initial"
        linkHref="instructor-dashboard/new-course"
        additionalStyles="rounded-sm"
      >
        Create Course
      </Button>
      <Button
        isLink={true}
        linkHref="instructor-dashboard"
        type="button"
        styleType="initial"
        additionalStyles="rounded-sm"
      >
        My Courses
      </Button>
    </nav>
  );
};

export default InstructorNav;
