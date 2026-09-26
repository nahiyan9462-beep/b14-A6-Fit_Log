 


 "use client";
 
 import { LibraryContext } from "@/context/LibraryContext";
 import { ILibrary } from "@/data-types/library.type";
 import { useContext} from "react";
import { toast } from "react-toastify";
 
export interface PlanButtonProps {
   library: ILibrary;
 }
 
 const SavedButton= ({ library }: PlanButtonProps) => {
     const  {saved,setSaved}=useContext(LibraryContext);
      
       const alreadyAdded = saved.some(
    (workout) => workout.id === library.id
  );
 
   const handleAddToPlan = () => {
    if (alreadyAdded) return;
     console.log('button triggered',library)
 
 
     setSaved([...saved,library]);
    toast.success(`${library.id} added successfully.`)
      
   };
 
   return (
     <button
     onClick={()=>handleAddToPlan()}
        type="button"
        className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-gray-500
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition
            duration-200
            hover:border-gray-300
            hover:bg-white/5
       "
     >
       {alreadyAdded ? `✓ Saved ${library.name}` : "Save for later"}
      
     </button>
   );
 };
 
 export default SavedButton;