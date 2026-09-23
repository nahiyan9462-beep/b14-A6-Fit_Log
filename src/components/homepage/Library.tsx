import React from 'react';

const getLibrary = async()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
}

const Library = async() => {
    const libraryData = await getLibrary();
    console.log(libraryData,'librarydata')
    return (
        <div>
            Library
        </div>
    );
};

export default Library;