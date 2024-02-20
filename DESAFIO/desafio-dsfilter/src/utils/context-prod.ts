import { createContext } from "react";

export type ContextProdCountType = {
    contextProdCount: number;
    setContextProdCount: (ContextProdCount: number) => void;
};

export const ContextProdCount = createContext<ContextProdCountType>({
    contextProdCount: 0,
    setContextProdCount: () => {},
  });
