import { StudentContextType } from "@/types/student/StudentContextType";
import { getAuthData } from "@/utility/helpers";
import { createContext, useState } from "react";
import useSwr from "swr";

export const StudentContext = createContext<StudentContextType>({
  studentData: {
    _id: "",
    cart: {
      items: [],
      totalAmount: 0,
    },
    favorites: [],
    courses: [],
    first_name: "",
    last_name: "",
  },
  filterData: {
    category: "",
    skillLevel: "",
    language: "",
    duration: "",
  },
  setFilterData: () => {},
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
  const [filterData, setFilterData] = useState({
    category: "",
    skillLevel: "",
    language: "",
    duration: "",
  });

  const authData = getAuthData();
  const studentId = authData?.id;

  const { data: studentData } = useSwr(`/api/student/${studentId}`, fetcher);

  return (
    <StudentContext.Provider
      value={{
        studentData,
        filterData,
        setFilterData,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
