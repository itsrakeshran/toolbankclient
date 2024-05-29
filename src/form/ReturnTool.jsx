import React,{ useState } from 'react'

import
      {
        TextField,
        Box, Stack, 
        Button, 
        Typography,
        FormControl,
        InputLabel,
        Select,
        MenuItem
      } from '@mui/material';

import axios from 'axios';


const ReturnTool = () => {
    
    const[returnFormData,setReturnFormData]=useState({
        "mechEmail":'',
        "toolId":'',
        "type":'Return'
    })

    const handleReturnTool = async () => {
      const url = 'http://localhost:8000/api/tool';
      const data = {returnFormData};
      console.log(data);
    //   try {
    //       const response = await axios.delete(url, { data: data });
    //       settoolId('');
    //       window.alert("Tool Deleted Successfully");
    //   } catch (error) {
    //       console.error(`remove tool Error: ${error}`);
    //   }
    }
   
    const handeOnChange = (e) => {
        setReturnFormData({
            ...returnFormData,[e.target.name]:e.target.value
        })
    };


  return (
    <div className='form_container'>
      <Typography variant='h6'>Return tool</Typography>
        <Stack direction='column' spacing={3} >
            
            <TextField
                label="Enter ToolId" 
                name="mechEmail"
                value={returnFormData.mechEmail} 
                onChange={handeOnChange}
                required
                variant="outlined" />

            <TextField
                label="Enter Mechanic Id" 
                name='toolId'
                value={returnFormData.toolId} 
                onChange={handeOnChange}
                required
                variant="outlined" />

            <Button variant='contained' onClick={handleReturnTool} fullWidth>Return Tool</Button>
        </Stack>  
      </div>
  )
}

export default ReturnTool

