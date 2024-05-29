import React, { useEffect, useState } from 'react'
import Toolcard from '../components/Toolcard.jsx'
import axios from 'axios'


const fetchTools=async()=>{
    const api_url='http://localhost:8000/api/tool'
    let res=await axios.get(api_url)
}


const DisplayTool = () => {
    const[tools,setTools]=useState(["name","Rakesh"]);

    const fetchTools=async()=>{
        const api_url='http://localhost:8000/api/tool'
        let res=await axios.get(api_url)
        setTools(res.data);
    }

    useEffect(()=>{
        fetchTools();
    },[])

  return (
    <div className='displayTools'>
    {
        tools.map((item)=><Toolcard data={item}/>)
    }
    </div>
  )
}

export default DisplayTool