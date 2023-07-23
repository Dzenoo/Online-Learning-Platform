export interface CourseCardProps {
  id: string;
  title: string;
  image: string;
  instructor: string;
  category?: string;
  skillLevel?: string;
  language?: string;
  duration?: string;
  popularity?: string;
  description?: string;
  price: number;
  lessons?: number;
  students?: number;
  articles?: number;
  lectures?: number;
  sections?: number;
}

export interface CourseListProps {
  courses: CourseCardProps[];
}

export interface CourseDetailsProps {
  course: CourseCardProps;
}