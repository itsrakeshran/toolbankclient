import React, { useEffect, useState } from 'react'
import {Stack, Button, Box} from '@mui/material'
import ProfileCard from '../components/Profile.jsx'
import LogoutButton from '../components/LogoutButton.jsx'
import Toolcard from '../components/Toolcard.jsx'
import DisplayTool from './DisplayTool.jsx'
import {fetchuser} from '../utils/Fetcuser.js'
import axios from "axios";
import ToolTable from './ToolTable.jsx'
import UserToolTable from './UserToolTable.jsx'



const MechanicPage = () => {
  const[righDisplay,setRightDisplay]=useState('Tools')
  const[userData,setUserData]=useState({})
  const[userEmail,setUserEmail]=useState('')

  const fetchuser = async()=>{
    let data=localStorage.getItem("email")
    setUserEmail(data);
    let api_url=`http://localhost:8000/api/user/email`
    try{
        let res=await axios.post(api_url,{email:data})
        setUserData(res.data)
    }
    catch(err){
        console.log("Error in fetch user:",err)
    }
}

  
  useEffect(()=>{
   fetchuser();
  },[])

  return (
    <>
        <div className="container">
            <div className="sidebar">
            <Box mb={2}>
                  <ProfileCard data={userData}/>
                  <Box mt={2}>
                  <hr/>
                  </Box>
            </Box>
            <Box width='200px' mx='auto'>
              <Stack direction='column' spacing={2}>
                  <Button variant='contained' onClick={()=>setRightDisplay("Tools")}>Show Tools</Button>
                  <Button variant='contained' onClick={()=>setRightDisplay("Cart")}>My Cart</Button>
              </Stack>
            </Box>         

            <Box position="absolute" bottom="10px">
                  <LogoutButton/>
            </Box>
            </div>
            <div className="rightsidebar">
              {
                righDisplay==="Tools"?<DisplayTool/>:<UserToolTable  email={userEmail} />
              }
            </div>
        </div>
    </> 
  )
}

export default MechanicPage