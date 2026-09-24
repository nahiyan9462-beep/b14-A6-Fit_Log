"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/data-types/library.type";
import { useContext, useState } from "react";

interface PlanButtonProps {
  library: ILibrary;
}

const PlanButton = ({ library }: PlanButtonProps) => {
    const  {}=useContext(LibraryContext)
     


  const [added, setAdded] = useState(false);

  const handleAddToPlan = () => {
    try {
      // Get existing plan
      const existingPlan = localStorage.getLibrary("fitlog-plan");

      const plan: ILibrary[] = existingPlan
        ? JSON.parse(existingPlan)
        : [];

      // Check if exercise is already added
      const alreadyExists = plan.some(
        (library) => library.id === library.id
      );

      if (alreadyExists) {
        setAdded(true);
        return;
      }

      // Add current exercise
      const updatedPlan = [...plan, library];

      // Save to localStorage
      localStorage.setItem(
        "fitlog-plan",
        JSON.stringify(updatedPlan)
      );

      setAdded(true);
    } catch (error) {
      console.error("Failed to add exercise to plan:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={()=>handleAddToPlan()}
      className="
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-[#e8f500]
        px-6
        py-3
        text-sm
        font-semibold
        text-black
        transition
        duration-200
        hover:bg-[#d9e600]
        hover:shadow-[0_0_25px_rgba(232,245,0,0.15)]
      "
    >
      <span>{added ? "✓" : "▣"}</span>

      {added
        ? "Added to today's plan"
        : "Add to today's plan"}
    </button>
  );
};

export default PlanButton;