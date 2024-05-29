import React, { useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const ProtectedRoutes = (props) => {

    const{Component}= props;

    const navigate =useNavigate();
    useEffect(()=>{
        let role = localStorage.getItem('role');
        if(!role) {
            navigate('/');
        }
    },[]) 
  return (
    <div>
        <Component/>
    </div>
  )
}

export default ProtectedRoutes;