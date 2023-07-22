export enum CouponEnum {
  PercentageCoupon = "perc",
  FixedCoupon = "fix",
}

export enum CourseManagamentCreation {
  Requirements = "requirements",
  Curriculum = "curriculum",
  Captions = "captions",
  Basics = "basics",
  Pricing = "pricing",
  Coupons = "coupons",
  Messages = "messages",
}

export interface CouponTypes {
  discountType?: CouponEnum;
  value?: string;
  expiration?: Date | string;
  id?: string;
}

export interface LectureProps {
  id: string;
  title: string;
}

export interface SectionProps {
  title: string;
  id: string;
  index: number;
  lectures?: LectureProps[];
  setnewCourseValues: React.Dispatch<React.SetStateAction<any>>;
  newCourseValues?: NewCourseValuesTypes;
}

export interface NewCourseValuesTypes {
  type: string;
  title: string;
  category: string;
  language: string;
  requirements: string[];
  forCourse: string[];
  captions: string;
  subtitle: string;
  description: string;
  image: string;
  level: string;
  price: number;
  sections: SectionProps[];
  coupon: CouponTypes;
}

export interface InstructorContextProviderType {
  courseManage:
    | CourseManagamentCreation.Requirements
    | CourseManagamentCreation.Curriculum
    | CourseManagamentCreation.Captions
    | CourseManagamentCreation.Basics
    | CourseManagamentCreation.Pricing
    | CourseManagamentCreation.Coupons
    | CourseManagamentCreation.Messages;
  currentStep: number;
  newCourseValues: NewCourseValuesTypes;
  setCourseManage: React.Dispatch<
    React.SetStateAction<CourseManagamentCreation>
  >;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setnewCourseValues: React.Dispatch<React.SetStateAction<any>>;
}

export interface NewCoursesState {
  newCourseValues?: NewCourseValuesTypes;
  setnewCourseValues: React.Dispatch<React.SetStateAction<any>>;
}
