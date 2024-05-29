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


const Addtool = () => {
    
    const[addToolData,setAddToolData]=useState({
        "title":'',
        "category":''
      })

      const CleanForm=()=>{
        setAddToolData({
            "title":'',
            "category":''
        })
      }

    //Handle Add Tool
    const handleAddTool = async () => {
        const url = 'http://localhost:8000/api/tool';
        const data = {...addToolData};
        try {
            const response = await axios.post(url, data);
            console.log(response.data);
            CleanForm();
            window.alert("Tool Sucessfully Added");

        } catch (error) {
            console.error(`Add tool Error: ${error}`);
        }
    }

    const handleChangeaddToolData = (e) => {
      setAddToolData({
        ...addToolData,
        [e.target.name]: e.target.value
    });
    };

  return (
    <div className='form_container'>
        <Stack direction='column' spacing={3} >
            <Typography variant='h6'>Add tool</Typography>
              <TextField
                id="outlined-basic" 
                label="Enter Title for Tool" 
                name="title"
                value={addToolData.title} 
                onChange={handleChangeaddToolData}
                required
                variant="outlined" />
              <Stack direction='row' spacing={2}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tool Category</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name='category'
                      id="demo-simple-select"
                      value={addToolData.category}
                      label="Tool Category"
                      onChange={handleChangeaddToolData}
                      required
                    >
                      <MenuItem value={"Screw Driver"}>Screw Driver</MenuItem>
                      <MenuItem value={"Wrench"}>Wrench</MenuItem>
                      <MenuItem value={'Plier'}>Plier</MenuItem>
                      <MenuItem value={'Hammer'}>Hammer</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <TextField
                id="outlined-basic" 
                label="Quantity" 
                name="quantity"
                value={addToolData.quantity} 
                onChange={handleChangeaddToolData}
                required
                variant="outlined" />
              </Stack>
              <Button variant='contained' onClick={handleAddTool} fullWidth>Add</Button>
        </Stack>  
      </div>
  )
}

export default Addtool

