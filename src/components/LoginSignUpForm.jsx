import React, { useState, useContext } from 'react'
import
      {
        TextField,
        Box, Stack, 
        Button, 
        Typography,
        Link,
        FormControl,
        InputLabel,
        Select,
        MenuItem
      } from '@mui/material';

import axios from 'axios';
import {roleContext} from '../pages/welcome'





const LoginSignUpForm = () => {

let {setRole}=useContext(roleContext);
const[formMode,setFormMode]=useState('login');

const[loginFormData,setLoginFormData]=useState({
  "email":'',
  "password":''
})

const handleChangelogin = (e) => {
  

  setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value
  });
};

  //LOGIN FUNCTION
  const handleLogin = async () => {
    const url = 'http://localhost:8000/api/user/login';
    const data = {...loginFormData};

    try {
        const response = await axios.post(url, data);
        console.log(response.data);
        window.alert("login Sucessfull")
        localStorage.setItem("role",response.data.role)
        setRole(response.data.role);
        localStorage.setItem("email",response.data.email)
    } catch (error) {
        console.error(`Login Error: ${error}`);
    }
  };


  const[signupFormData,setsignupFormData]=useState({
    "name":'',
    "email":'',
    "mobile":'',
    "password":'',
    "level_Of_mech":'',
    "role":"MECH"
  })

  const cleanSignUpform=()=>{
    setsignupFormData({
      "name":'',
      "email":'',
      "mobile":'',
      "password":'',
      "level_Of_mech":'',
      "role":"MECH"
    })
  }
  
  const handleChangeSignUp = (e) => {
    setsignupFormData({
        ...signupFormData,
        [e.target.name]: e.target.value
    });
  };



  //SIGN UP FUNCTION
  const handleSignup = async () => {
    const url = 'http://localhost:8000/api/user';
    const data = {...signupFormData};

    try {
        const response = await axios.post(url, data);
        console.log(response.data);
        window.alert("User created Sucessfull");
        cleanSignUpform();
        setFormMode('login');
    } catch (error) {
        console.error(`Login Error: ${error}`);
    }
  };



  return (
    <>
      <div className='form_container'>
        <Stack direction='column' spacing={3} >
          {
            formMode==='login'?
            <>
              <Typography variant='h6'>Login</Typography>
              <TextField
                id="outlined-basic" 
                label="Enter your Email" 
                name="email"
                value={loginFormData.email} 
                onChange={handleChangelogin}
                required
                variant="outlined" />

              <TextField
               id="outlined-basic" 
               label="Enter password" 
               type="password"
               name="password"
               value={loginFormData.password} 
               onChange={handleChangelogin}
               required
               variant="outlined" />

              <Button variant='contained' onClick={handleLogin} fullWidth>Login</Button>

              <Typography  onClick={()=>setFormMode('signup')}>
                <Link>Create Account page....</Link>
              </Typography>
            </>
            :
            <>
              <Typography variant='h6'>SignUp</Typography>
              <Stack direction='row' spacing={1}>
              <TextField
                id="outlined-basic" 
                label="Enter your name" 
                name="name"
                value={signupFormData.name} 
                onChange={handleChangeSignUp}
                variant="outlined" />

                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Mechanic Grade</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name='level_Of_mech'
                      id="demo-simple-select"
                      value={signupFormData.level_Of_mech}
                      label="Mechanic Grade"
                      onChange={handleChangeSignUp}
                      required
                    >
                      <MenuItem value={'Expert'}>Expert</MenuItem>
                      <MenuItem value={'Medium'}>Medium</MenuItem>
                      <MenuItem value={'New Recruit'}>New Recruit</MenuItem>
                      <MenuItem value={'Trainee'}>Trainee</MenuItem>
                    </Select>
                  </FormControl>
              </Box>
              </Stack>

              <TextField
                id="outlined-basic" 
                label="Enter your email" 
                name="email"
                type="email"
                value={signupFormData.email} 
                onChange={handleChangeSignUp}
                variant="outlined" /> 

              <TextField
                // id="outlined-basic" 
                label="Enter mobile number" 
                name="mobile"
                type="number"
                value={signupFormData.mobile} 
                onChange={handleChangeSignUp}
                variant="outlined" /> 


              <Stack direction='row' spacing={1}>

                <TextField
                  id="outlined-basic" 
                  label="Set Password" 
                  name="password"
                  value={signupFormData.password} 
                  onChange={handleChangeSignUp}
                  variant="outlined" /> 
      
                <Button variant='contained' onClick={handleSignup} >SignUp</Button>
              </Stack>

              <Typography onClick={()=>setFormMode('login')}>
                <Link>Login here....</Link>
              </Typography>
            </>
          }
        </Stack>  
      </div>

    </>
  )
}

export default LoginSignUpForm