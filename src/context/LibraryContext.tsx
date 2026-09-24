
'use client'

import React, { createContext, ReactNode, useState } from 'react';

export const LibraryContext = createContext({}); 

const LibraryProvider = ({children} : {children : ReactNode}) => {

    const [workOutPlan,setWorkOutPlan] = useState([]);
    const [planSaved,setPlanSaved] = useState([]);

    const sharedData = {
        workOutPlan,
        setWorkOutPlan,
        planSaved,
        setPlanSaved
    };

    return (
         <LibraryContext.Provider value={sharedData}>{children}</LibraryContext.Provider>
    );
};

export default LibraryProvider;