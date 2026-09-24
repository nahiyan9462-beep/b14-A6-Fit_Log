import { ILibrary } from '@/data-types/library.type';
import React from 'react';


export interface LibraryDetailProps{
    params: Promise<{
        id:string
    }>
}

const getLibrary = async()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const LibraryDetailspage = async({params}:LibraryDetailProps) => {
    const {id}= await params;
    const libraryData = await getLibrary();
    const library= libraryData.find((library: ILibrary) => String(library.id) === String(id))


    console.log(params,'initially')
    console.log(library , 'library detail page');

    return (
        <div>
            LibraryDetailspage 
        </div>
    );
};

export default LibraryDetailspage;