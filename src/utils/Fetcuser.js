import axios from "axios";

export  const fetchuser = async()=>{
    let data=localStorage.getItem("email")
    let api_url=`http://localhost:8000/api/user/email`
    try{
        let res=await axios.post(api_url,{email:data})
        return(res.data)
    }
    catch(err){
        console.log("Error in fetch user:",err)
    }
}
