 


 "use client";
 
 import { LibraryContext } from "@/context/LibraryContext";
 import { ILibrary } from "@/data-types/library.type";
 import { useContext} from "react";
 
export interface PlanButtonProps {
   library: ILibrary;
 }
 
 const SavedButton= ({ library }: PlanButtonProps) => {
     const  {saved,setSaved}=useContext(LibraryContext);
      
 
   const handleAddToPlan = () => {
     console.log('button triggered',library)
 
 
     setSaved([...saved,library]);
     alert(`you have added '${library.id}' card`)
      
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
     
       <span>{saved ? "✓" : ""}</span>
     
       {saved
         ? "sved for later"
         : "save for later"}
     </button>
   );
 };
 
 export default SavedButton;