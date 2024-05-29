import React, {useContext} from 'react'
import { Button } from '@mui/material'
import {roleContext} from  '../pages/welcome.jsx'

const LogoutButton = () => {
  let{setRole}=useContext(roleContext);
  
    const logout=()=>{
        localStorage.clear();
        setRole('')
    }


  return(
    <>
        <Button variant='contained' color='warning' onClick={logout}>Logout</Button>
    </>
  )
}

export default LogoutButton;