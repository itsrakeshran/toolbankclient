import React, {useState} from 'react'
import { Button, Box, Stack } from '@mui/material'
import ToolTable from './ToolTable'
import Addtool from '../form/Addtool.jsx'
import RemoveTool from '../form/RemoveTool.jsx'

const ToolDashBoard = () => {
  const[showForm,setShowForm]=useState("no");


  return (
    <>
        <Box>
            <Stack>
            <Stack direction='row' spacing={2}>
                <Button variant='contained' onClick={()=>setShowForm('no')}>Home</Button>
                <Button variant='contained' onClick={()=>setShowForm('Add Tool')}>Add Tool</Button>
                <Button variant='contained' onClick={()=>setShowForm('Remove Tool')}>Remove Tool</Button>
            </Stack>
            {              
                showForm==='no'?<ToolTable/>: showForm ==='Add Tool'?<Addtool/>:<RemoveTool/>
            }

            </Stack>

        </Box>
    </>
  )
}

export default ToolDashBoard