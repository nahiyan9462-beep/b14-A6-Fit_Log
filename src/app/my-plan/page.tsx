
'use client'

import LibraryCard from '@/components/homepage/LibraryCard';
import { LibraryContext } from '@/context/LibraryContext';
import { ILibrary } from '@/data-types/library.type';
import Link from 'next/link';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const { workOutPlan ,saved} = useContext(LibraryContext);
    console.log(workOutPlan,'workoutplan');
    return (
         <section className='container mx-auto'>
            <div className=' mt-5 p-4'>
                <h2 className='text-3xl font-bold'>My Plan</h2>
                <p>Cap of five lifts for today. Finish them , then load more .</p>
            </div>
            <div>

            </div>
            <div className='container mx-auto p-4 mt-5'>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-box">
                    <input type="radio" name="my_tabs_6" className="tab" aria-label={`Today's plan (${workOutPlan.length})`} />
                    <div className="tab-content bg-base-100 border-base-300 p-10 mt-5">
                        {workOutPlan.length>0?(workOutPlan.map((library : ILibrary)=>{
                            return <LibraryCard key={library.id} library={library}></LibraryCard>
                        })
                        ):(
                            <div className='container mx-auto'>
                                <h2 className='text-center font-semibold text-2xl'>NOTHING HERE YET</h2>
                                <p className='text-center text-slate-400'>Browse the library and add a lift to get today moving.</p>

                                <Link href=''><button
                                     
                                    >
                                Go to Workouts</button></Link>
                            </div>
                            
                        )}

                    </div>

                    <input type="radio" name="my_tabs_6" className="tab" aria-label={`Saved (${saved.length})`}
                     defaultChecked />
                    <div className="tab-content bg-base-100 border-base-300 p-10 mt-5"> 
                        {saved.length>0?(saved.map((library : ILibrary)=>{
                            return <LibraryCard key={library.id} library={library}></LibraryCard>
                        })
                        ):(
                            <div className='container mx-auto'>
                                <h2 className='text-center font-semibold text-2xl'>NOTHING HERE YET</h2>
                                <p className='text-center text-slate-400'>Browse the library and add a lift to get today moving.</p>
                                <Link href=''><button
                                   className='btn btn-outline items-center justify-center'
                                    >
                                Go to Workouts</button></Link>
                            </div>
                        )}

                    </div>
            
                </div>
            </div>
             
         </section>
    );
};

export default MyPlanPage;