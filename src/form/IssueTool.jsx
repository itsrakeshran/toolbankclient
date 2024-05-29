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


const IssueTool = () => {
    
    const[issueFormData,setIssueFormData]=useState({
        "mechEmail":'',
        "toolId":'',
        "type":'Issue'
    })

    const cleanform=()=>{
        setIssueFormData({
            "mechEmail":'',
            "toolId":'',
            "type":'Issue'
        })
    }

    const handleIssueTool = async () => {
      const url = 'http://localhost:8000/api/transactions';
      const data = issueFormData;
      console.log(data);
      try {
          const response = await axios.post(url, data);
          cleanform();
          window.alert("Transcation Completed");
      } catch (error) {
          console.error(`remove tool Error: ${error}`);
      }
    }
   
    const handeOnChange = (e) => {
        setIssueFormData({
            ...issueFormData,[e.target.name]:e.target.value
        })
    };


  return (
    <div className='form_container'>
      <Typography variant='h6'>Issue tool</Typography>
        <Stack direction='column' spacing={3} >
            
            <TextField
                label="Enter ToolId" 
                name="toolId"
                value={issueFormData.toolId} 
                onChange={handeOnChange}
                required
                variant="outlined" />

            <TextField
                label="Enter Mechanic Id" 
                name='mechEmail'
                value={issueFormData.mechEmail} 
                onChange={handeOnChange}
                required
                variant="outlined" />

              <Button variant='contained' onClick={handleIssueTool} fullWidth>Issue Tool</Button>
        </Stack>  
      </div>
  )
}

export default IssueTool

