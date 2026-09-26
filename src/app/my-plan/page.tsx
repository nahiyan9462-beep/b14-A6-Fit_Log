'use client'

import SavedLibraryCard from '@/components/allcard/SavedCard';
import TodaysPlanCard from '@/components/allcard/TodaysPlanCard';
import { LibraryContext } from '@/context/LibraryContext';
import { ILibrary } from '@/data-types/library.type';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import WorkoutStats from '@/components/homepage/WorkoutStats';


const MyPlanPage = () => {
    const { workOutPlan, saved } = useContext(LibraryContext);
    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
    
    const activeList = activeTab === 'today' ? workOutPlan : saved;
    const [sortBy,setSortBy]=useState<'duration' | 'calories' | 'rating'>('duration');

    const sortLibrary=(library:ILibrary[])=>{
        const sortedLibrary =[...library];

        if(sortBy === 'duration'){
            sortedLibrary.sort((a,b) => b.duration - a.duration)
        }else if(sortBy === 'calories'){
                sortedLibrary.sort((a,b) => b.caloriesBurned - a.caloriesBurned)
        }else if(sortBy === 'rating'){
            sortedLibrary.sort((a,b) => b.rating - a.rating)
        }
        return sortedLibrary;
    };

    const sortedWorkoutPlan =sortLibrary(workOutPlan);
    const sortedSaved =sortLibrary(saved);




    return (
         <section className='container mx-auto'>
            <div className=' mt-5 p-4'>
                <h2 className='text-3xl font-bold'>My Plan</h2>
                <p>Cap of five lifts for today. Finish them , then load more .</p>
            </div>

            <WorkoutStats library={activeList} />


            <div className='container mx-auto mt-5 items-center justify-end'>
                 <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'duration' | 'calories' | 'rating')}
                 defaultValue="Color scheme" className="select select-accent">
                    <option disabled={true}>sortBy
                    </option>
                    <option>Duration</option>
                    <option>Calories</option>
                    <option>Rating</option>
                </select>
            </div>
            <div className='container mx-auto p-4 mt-5'>
                <div className="tabs tabs-box">
                    <input
                        type="radio"
                        name="my_tabs_6"
                        className="tab"
                        aria-label={`Today's plan (${workOutPlan.length})`}
                        checked={activeTab === 'today'}
                        onChange={() => setActiveTab('today')}
                    />
                    <div className="tab-content bg-base-100 border-base-300 p-10 mt-5">
                        {sortedWorkoutPlan.length > 0 ? (
                            sortedWorkoutPlan.map((library: ILibrary) => (
                                <TodaysPlanCard key={library.id} library={library} />
                            ))
                        ) : (
                            <div className='container mx-auto'>
                                <h2 className='text-center font-semibold text-2xl'>NOTHING HERE YET</h2>
                                <p className='text-center text-slate-400'>Browse the library and add a lift to get today moving.</p>
                                <div className="flex w-full justify-center px-4 sm:px-0 mt-5">
                                    <Link
                                        href="/library"
                                        className="
                                        flex w-full max-w-xs
                                        items-center justify-center gap-2
                                        rounded-xl
                                        bg-[#e8f500]
                                        px-6 py-3
                                        text-sm font-semibold text-black
                                        transition-all duration-200
                                        hover:bg-[#d9e600]
                                        hover:shadow-[0_0_25px_rgba(232,245,0,0.15)]
                                        active:scale-95
                                        sm:w-auto sm:min-w-48
                                        "
                                    >
                                        Go to Workouts
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_6"
                        className="tab"
                        aria-label={`Saved (${saved.length})`}
                        checked={activeTab === 'saved'}
                        onChange={() => setActiveTab('saved')}
                    />
                    <div className="tab-content bg-base-100 border-base-300 p-10 mt-5">
                        {sortedSaved.length > 0 ? (
                            sortedSaved.map((library: ILibrary) => (
                                <SavedLibraryCard key={library.id} library={library} />
                            ))
                        ) : (
                            <div className='container mx-auto'>
                                <h2 className='text-center font-semibold text-2xl'>NOTHING HERE YET</h2>
                                <p className='text-center text-slate-400'>Browse the library and add a lift to get today moving.</p>
                                <div className="flex w-full justify-center px-4 sm:px-0 mt-5">
                                    <Link
                                        href="/library"
                                        className="
                                        flex w-full max-w-xs
                                        items-center justify-center gap-2
                                        rounded-xl
                                        bg-[#e8f500]
                                        px-6 py-3
                                        text-sm font-semibold text-black
                                        transition-all duration-200
                                        hover:bg-[#d9e600]
                                        hover:shadow-[0_0_25px_rgba(232,245,0,0.15)]
                                        active:scale-95
                                        sm:w-auto sm:min-w-48
                                        "
                                    >
                                        Go to Workouts
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
         </section>
    );
};

export default MyPlanPage;