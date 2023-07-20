import React from "react";
import Button from "../shared/form/Button";

const InstructorNav = () => {
  return (
    <nav className="">
      <Button
        isLink={true}
        type="button"
        styleType="initial"
        linkHref="instructor-nav/new-course"
      >
        Create Course
      </Button>
      <Button
        isLink={true}
        linkHref="instructor-nav/courses"
        type="button"
        styleType="initial"
      >
        Courses
      </Button>
    </nav>
  );
};

export default InstructorNav;
