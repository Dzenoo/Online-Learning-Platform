export interface CourseCardProps {
  _id: string;
  title: string;
  image: string;
  instructor: {
    first_name: string;
    last_name: string;
    image: string;
  };
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
  sections?: [
    {
      _id: string;
      title: string;
      lectures: [
        {
          _id: string;
          title: string;
        }
      ];
    }
  ];
}

export interface CourseListProps {
  courses: CourseCardProps[];
}

export interface CourseDetailsProps {
  course: CourseCardProps;
}
