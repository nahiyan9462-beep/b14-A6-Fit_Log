'use client'
 
import React, { createContext, ReactNode, useState } from 'react';

export type WorkoutItem = {
  id: string;
  title: string;
  image?: string;
  // add any other fields your cards need
};

type LibraryContextType = {
  workOutPlan: WorkoutItem[];
  setWorkOutPlan: React.Dispatch<React.SetStateAction<WorkoutItem[]>>;
  saved: WorkoutItem[];
  setSaved: React.Dispatch<React.SetStateAction<WorkoutItem[]>>;
  addToPlan: (item: WorkoutItem) => void;
  removeFromPlan: (id: string) => void;
  addToSaved: (item: WorkoutItem) => void;
  removeFromSaved: (id: string) => void;
  isInPlan: (id: string) => boolean;
  isInSaved: (id: string) => boolean;
};

export const LibraryContext = createContext({});

const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [workOutPlan, setWorkOutPlan] = useState<WorkoutItem[]>([]);
  const [saved, setSaved] = useState<WorkoutItem[]>([]);

  const addToPlan = (item: WorkoutItem) =>
    setWorkOutPlan((prev) => (prev.some((i) => i.id === item.id) ? prev : [...prev, item]));

  const removeFromPlan = (id: string) =>
    setWorkOutPlan((prev) => prev.filter((i) => i.id !== id));

  const addToSaved = (item: WorkoutItem) =>
    setSaved((prev) => (prev.some((i) => i.id === item.id) ? prev : [...prev, item]));

  const removeFromSaved = (id: string) =>
    setSaved((prev) => prev.filter((i) => i.id !== id));

  const isInPlan = (id: string) => workOutPlan.some((i) => i.id === id);
  const isInSaved = (id: string) => saved.some((i) => i.id === id);

  const sharedData: LibraryContextType = {
    workOutPlan,
    setWorkOutPlan,
    saved,
    setSaved,
    addToPlan,
    removeFromPlan,
    addToSaved,
    removeFromSaved,
    isInPlan,
    isInSaved,
  };

  return <LibraryContext.Provider value={sharedData}>{children}</LibraryContext.Provider>;
};

export default LibraryProvider;