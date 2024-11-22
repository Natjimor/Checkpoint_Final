import React, { createContext, useContext, useState, ReactNode } from "react";

interface PoemData {
  title: string;
  author: string;
  lines: string[];
  category: string;
}

interface PoemContextType {
  poemData: PoemData;
  updatePoemData: (data: Partial<PoemData>) => void;
  resetPoemData: () => void;
}

const PoemContext = createContext<PoemContextType | undefined>(undefined);

const defaultPoemData: PoemData = {
  title: "",
  author: "",
  lines: [],
  category: "",
};

export const PoemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [poemData, setPoemData] = useState<PoemData>(defaultPoemData);

  const updatePoemData = (data: Partial<PoemData>) => {
    setPoemData((prev) => ({ ...prev, ...data }));
  };

  const resetPoemData = () => {
    setPoemData(defaultPoemData);
  };

  return (
    <PoemContext.Provider value={{ poemData, updatePoemData, resetPoemData }}>
      {children}
    </PoemContext.Provider>
  );
};

export const usePoemContext = () => {
  const context = useContext(PoemContext);
  if (!context) {
    throw new Error("usePoemContext must be used within a PoemProvider");
  }
  return context;
};