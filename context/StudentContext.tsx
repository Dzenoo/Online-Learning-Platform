import { StudentContextType } from "@/types/student/StudentContextType";
import { getAuthData } from "@/utility/helpers";
import { createContext } from "react";
import useSwr from "swr";

export const StudentContext = createContext<StudentContextType>({
  studentData: {
    _id: "",
  },
  // toggleCart: () => {},
  // addToFavorites: () => {},
});

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const StudentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const authData = getAuthData();
  const studentId = authData?.id;

  const { data: studentData } = useSwr(`/api/student/${studentId}`, fetcher);

  return (
    <StudentContext.Provider
      value={{
        studentData,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
