// AccessContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface AccessContextProps {
  accessGranted: boolean;
  grantAccess: () => void;
}

const AccessContext = createContext<AccessContextProps | undefined>(undefined);

export const AccessProvider = ({ children }: { children: ReactNode }) => {
  const [accessGranted, setAccessGranted] = useState(false);

  const grantAccess = () => {
    setAccessGranted(true);
  };

  return (
    <AccessContext.Provider value={{ accessGranted, grantAccess }}>
      {children}
    </AccessContext.Provider>
  );
};

export const useAccess = () => {
  const context = useContext(AccessContext);
  if (!context) {
    throw new Error("useAccess must be used within an AccessProvider");
  }
  return context;
};
