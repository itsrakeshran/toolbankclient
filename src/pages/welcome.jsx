import React, { useEffect, useState, createContext } from 'react'
import LoginSignUpForm from '../components/LoginSignUpForm.jsx'
import {Route,Routes} from "react-router-dom";
import AdminPage from '../pages/AdminPage.jsx';
import MechanicPage from './MechanicPage.jsx';
import { useNavigate } from 'react-router-dom';
import ProtectedRoutes from '../utils/protectedroutes.jsx';

export let roleContext=createContext();

const Welcome = () => {
  const navigate=useNavigate();
  const[role,setRole]=useState('')

  

  const findDashBoard=(role)=>{
    switch (role){
      case 'ADMIN':
        navigate('/admin')
        break;
      case 'MECH':
        navigate('/mechanic')
        break;
      default:
        navigate('/')
    }
  }

  
  useEffect(()=>{
    console.log("welcome useEffect")
    let role = localStorage.getItem('role')
    if(!role){
      findDashBoard('/');
    }
    findDashBoard(role);
    },[role]);

  


  return (
    <>
    <roleContext.Provider value={{setRole }}>
        <Routes>
            <Route path='/' element={<ProtectedRoutes Component={LoginSignUpForm}/>}/>
            <Route path='/admin' element={<ProtectedRoutes Component={AdminPage}/>}/>
            <Route path='/mechanic' element={<ProtectedRoutes Component={MechanicPage}/>}/>
        </Routes>
    </roleContext.Provider>
    </>
  )
}

export default Welcome