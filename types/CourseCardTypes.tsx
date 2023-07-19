export interface CourseCardLandingProps {
  id: string;
  title: string;
  price: number;
  image: string;
  instructor: string;
}

export interface CourseListProps {
  courses: CourseCardLandingProps[];
}
