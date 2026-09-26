'use client'

import { ILibrary } from '@/data-types/library.type';
import React, { createContext, ReactNode, useContext, useState } from 'react';

type LibraryContextType = {
  workOutPlan: ILibrary[];
  setWorkOutPlan: React.Dispatch<React.SetStateAction<ILibrary[]>>;
  saved: ILibrary[];
  setSaved: React.Dispatch<React.SetStateAction<ILibrary[]>>;
  // addToPlan: (item: ILibrary) => void;
  // removeFromPlan: (id: number) => void;
  // addToSaved: (item: ILibrary) => void;
  // removeFromSaved: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isInSaved: (id: number) => boolean;
};

export const LibraryContext = createContext<LibraryContextType>({
  
  workOutPlan: [],

  setWorkOutPlan: () => {},

  saved: [],

  setSaved: () => {},

  // addToPlan: () => {},

  // removeFromPlan: () => {},

  // addToSaved: () => {},

  // removeFromSaved: () => {},

  isInPlan: () => false,

  isInSaved: () => false,
});

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
};

const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [workOutPlan, setWorkOutPlan] = useState<ILibrary[]>([]);
  const [saved, setSaved] = useState<ILibrary[]>([]);

  // const addToPlan = (item: ILibrary) =>
  //   setWorkOutPlan((prev) =>
  //     prev.some((i) => i.id === item.id) ? prev : [...prev, item]
  //   );

  // const removeFromPlan = (id: number) =>
  //   setWorkOutPlan((prev) => prev.filter((i) => i.id !== id));

  // const addToSaved = (item: ILibrary) =>
  //   setSaved((prev) =>
  //     prev.some((i) => i.id === item.id) ? prev : [...prev, item]
  //   );

  // const removeFromSaved = (id: number) =>
  //   setSaved((prev) => prev.filter((i) => i.id !== id));

  const isInPlan = (id: number) => workOutPlan.some((i) => i.id === id);
  const isInSaved = (id: number) => saved.some((i) => i.id === id);

  const sharedData: LibraryContextType = {
    workOutPlan,
    setWorkOutPlan,
    saved,
    setSaved,
    // addToPlan,
    // removeFromPlan,
    // addToSaved,
    // removeFromSaved,
    isInPlan,
    isInSaved,
  };

  return <LibraryContext.Provider value={sharedData}>{children}</LibraryContext.Provider>;
};

export default LibraryProvider;