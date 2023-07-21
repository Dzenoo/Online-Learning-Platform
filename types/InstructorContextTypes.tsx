export interface InstructorContextTypes {
  type: string;
  title: string;
  category: string;
  language: string;
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

export interface InstructorContextType {
  courseManage:
    | CourseManagamentCreation.Requirements
    | CourseManagamentCreation.Curriculum
    | CourseManagamentCreation.Captions
    | CourseManagamentCreation.Basics
    | CourseManagamentCreation.Pricing
    | CourseManagamentCreation.Coupons
    | CourseManagamentCreation.Messages;
  currentStep: number;
  newCourseValues: InstructorContextTypes;
  setCourseManage: React.Dispatch<
    React.SetStateAction<CourseManagamentCreation>
  >;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setnewCourseValues: React.Dispatch<
    React.SetStateAction<InstructorContextTypes>
  >;
}