import { createContext } from "react";

export const StudentContext = createContext({});

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const StudentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StudentContext.Provider value={{}}>{children}</StudentContext.Provider>
  );
};
