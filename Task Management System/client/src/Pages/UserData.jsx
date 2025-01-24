import axios from "axios";
import { useEffect, useState } from "react"

import Table from 'react-bootstrap/Table';


const UserData=()=>{
    const [data,setData]=useState([]);

    const loadData= async()=>{
        try {
            let api="http://localhost:8080/users/userdisplay";
            const response=await axios.get(api);
            setData(response.data);
            console.log(data);
;        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loadData();
    },[])
    let sno=0;
    const ans=data.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.userid}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Sno</th>
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {ans}
      </thead>
      </Table>
      

        </>
    )
}
export default UserData