
'use client'

import { LibraryContext } from '@/context/LibraryContext';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const { workOutPlan } = useContext(LibraryContext);
    console.log(workOutPlan,'workoutplan');
    return (
        <div>
            My workout plan page.
        </div>
    );
};

export default MyPlanPage;