export interface InstructorContextTypes {
  type: string;
  title: string;
  category: string;
  language: string;
}

export interface InstructorContextType {
  currentStep: number;
  newCourseValues: InstructorContextTypes;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setnewCourseValues: React.Dispatch<
    React.SetStateAction<InstructorContextTypes>
  >;
}
