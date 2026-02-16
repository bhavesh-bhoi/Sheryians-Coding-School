import React from "react";
import Courses from "./Courses";

const AllCourses = (props) => {
  console.log("AllCourses : ", props.courseData);
  return (
    <div>
      <h1>All Courses Here</h1>
      <Courses courseData={props.courseData} />
      <Courses courseData={props.courseData} />
      <Courses courseData={props.courseData} />
      <Courses courseData={props.courseData} />
      <Courses courseData={props.courseData} />
    </div>
  );
};

export default AllCourses;
