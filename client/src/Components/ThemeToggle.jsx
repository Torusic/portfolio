import React, { useEffect, useState } from 'react'
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
export default function ThemeToggle(){

    const[dark,setDark]=useState(
        localStorage.getItem("theme")==="dark"
    )
    useEffect(()=>{
        if(dark){
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark")
        }else{
            document.documentElement.classList.remove("dark");
             localStorage.setItem("theme","light")

        }

    },[dark])
    return(
        <button onClick={() => setDark(!dark)}
     className="px-4 py-2 rounded  ">
        {dark ? <CiLight size={20} />:<MdDarkMode size={20} />}

    </button>
    )
    
}