import React, {useState} from 'react'
import { Button, Box, Stack } from '@mui/material'
import ToolTable from './ToolTable.jsx'
import IssueTool from '../form/IssueTool.jsx'
import ReturnTool from '../form/ReturnTool.jsx'


const UserDashBoard = () => {
  const[showForm,setShowForm]=useState("no");


  return (
    <>
        <Box>
            <Stack>
            <Stack direction='row' spacing={2}>
                <Button variant='contained' onClick={()=>setShowForm('no')}>Issue Tool</Button>
                <Button variant='contained' onClick={()=>setShowForm('returnTool')}>Return Tool</Button>
                <Button variant='contained' onClick={()=>setShowForm('Remove Tool')}>Check User Accoutn</Button>
            </Stack>
            {              
                showForm==='no'?<IssueTool/>: showForm ==='returnTool'?<ReturnTool/>:<h1>User Account</h1>
            }

            </Stack>

        </Box>
    </>
  )
}

export default UserDashBoard