import React,{useState, useEffect } from 'react'
import {Stack, Button, Box} from '@mui/material'
import ProfileCard from '../components/Profile.jsx'
import LogoutButton from '../components/LogoutButton.jsx'
import Toolcard from '../components/Toolcard.jsx'
import axios from 'axios'
import ToolDashBoard from './ToolDashBoard.jsx'
import UserDashBoard from './UserDashBoard.jsx'
import Addtool from '../form/Addtool.jsx'
import ToolSearchBar from './ToolSearchbar.jsx'



const AdminPage = () => {
  const[rightDasboard,setRightDashboard]=useState('TDB')
  const[userData,setUserData]=useState({})


  const fetchuser = async()=>{
    let data=localStorage.getItem("email")
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
                  <Button variant='contained' onClick={()=>{setRightDashboard("TDB")}}>Tool Dash Board</Button>
                  <Button variant='contained' onClick={()=>{setRightDashboard("UDB")}}>User Dash Board</Button>
              </Stack>
              </Box>

              <Box position="absolute" bottom="10px">
                    <LogoutButton/>
              </Box>
              </div>
              <div className="rightsidebar">
                 {rightDasboard==="TDB"?
                 <>
                    <ToolDashBoard/>
                 </>
                 :
                 <>
                    <ToolSearchBar/>  
                    <UserDashBoard/>
                 </>} 
              </div>
      </div>
    </>
  )
}

export default AdminPage