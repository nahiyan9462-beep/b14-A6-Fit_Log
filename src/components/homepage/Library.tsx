import React from 'react';
import LibraryCard from './LibraryCard';
import { ILibrary } from '@/data-types/library.type';

const getLibrary = async()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const Library = async() => {
    const libraryData = await getLibrary();
    console.log(libraryData,'librarydata')
    return (
        <section className='container mx-auto'>
            <div className='container mx-auto mt-5 p-4'>
                <h2 className='text-4xl font-bold'>THE LIBRARY</h2>
                <p className='text-slate-300'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-5'>
            {
                libraryData.slice(0,6).map((library:ILibrary,ind:number)=>{
                    return <LibraryCard key={ind} library={library}/>
                })
            }
            </div>
        </section>
         
    );
};

export default Library;