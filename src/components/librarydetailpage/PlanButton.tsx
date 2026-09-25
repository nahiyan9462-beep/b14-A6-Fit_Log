"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { ILibrary } from "@/data-types/library.type";
import { useContext} from "react";
import { toast } from "react-toastify";

interface PlanButtonProps {
  library: ILibrary;
}

const PlanButton = ({ library }: PlanButtonProps) => {
    const  {workOutPlan,setWorkOutPlan}=useContext(LibraryContext);
     
     

  const handleAddToPlan = () => {

    // if (alreadyAdded) return;
    
    console.log('button triggered',library)


    setWorkOutPlan([...workOutPlan,library]);
    
    toast.success(`you've added successfully`)
     
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
    
      Add to Plan
    </button>
  );
};

export default PlanButton;