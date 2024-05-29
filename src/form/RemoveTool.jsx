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


const RemoveTool = () => {
    
    const[toolId,settoolId]=useState('')

    //Handle Add Tool
    // const handleRemoveTool = async () => {
    //     const url = 'http://localhost:8000/api/tool';
    //     const data = {"toolid":toolId};
    //     console.log(data);
    //     try {
    //         const response = await axios.delete(url, data);
    //         settoolId('');
    //         window.alert("Tool Deleted Sucessfully");
    //     } catch (error) {
    //         console.error(`remove tool Error: ${error}`);
    //     }
    // }


    const handleRemoveTool = async () => {
      const url = 'http://localhost:8000/api/tool';
      const data = {"toolid": toolId};
      console.log(data);
      try {
          const response = await axios.delete(url, { data: data });
          settoolId('');
          window.alert("Tool Deleted Successfully");
      } catch (error) {
          console.error(`remove tool Error: ${error}`);
      }
    }

    // const handleRemoveTool=()=>{
    //   console.log({"Tood id":toolId})
    // }


   
    const handeChangeToolid = (e) => {
      settoolId(prev=>e.target.value)
    };

    

  return (
    <div className='form_container'>
      <Typography variant='h6'>Delete Tool</Typography>
        <Stack direction='column' spacing={3} >
            
              <TextField
                id="outlined-basic" 
                label="Enter Title for Tool" 
                value={toolId} 
                onChange={handeChangeToolid}
                required
                variant="outlined" />
              <Button variant='contained' onClick={handleRemoveTool} fullWidth>Delete Tool</Button>
        </Stack>  
      </div>
  )
}

export default RemoveTool

