import React, { useState, useContext } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};


interface IsOpenContextProps {
  isOpen: boolean;
  toggleIsOpen: () => void;
  
}

const IsOpenContext = React.createContext<IsOpenContextProps | undefined>(
  undefined
);

export const IsOpenProvider = ({ children }: ChildrenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <IsOpenContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </IsOpenContext.Provider>
  );
};

export const useIsOpen = (): IsOpenContextProps => {
  const context = useContext(IsOpenContext);

  if (!context) {
    throw new Error("useIsOpen must be used within an IsOpenProvider");
  }

  return context;
};
