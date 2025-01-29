

import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const EmpProfile=()=>{
    const navigate=useNavigate();
        const [username,setUserName]=useState("");
        const [useremail,setUserEmail]=useState("");
        const [designation,setDesignation]=useState("");
    
        useEffect(()=>{
            if(localStorage.getItem("username")==null)
            {
                navigate("/login")
            }
            else
            {
                setUserName(localStorage.getItem("username"));
                setUserEmail(localStorage.getItem("useremail"));
                setDesignation(localStorage.getItem("designation"));
            }
        },[])

        const logoutuser=()=>{
            localStorage.clear();
            message.success("You are Loged-out : "+ username);
            navigate("/login")
        }
    return(
        <>
         <div id='usersection1'>
                                   <div id='usersection2'align="center">
                                        <div id='usersection3'>
                                            <div id='usersection4'>
                                            <h3>Welcome :  {username}</h3>
                                            <h6>Email : {useremail}</h6>
                                            <h6>Your Designation : {designation}</h6>
                                            <Button variant="warning"  style={{marginTop:"20px"}} onClick={logoutuser}>Log-Out</Button>

                                             <div>
                                              <div>
                                              </div>
                                             </div>
                                            </div>
                                        </div>
                                   </div>
                            </div>
        </>
    )
}
export default EmpProfile