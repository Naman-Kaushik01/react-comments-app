import { useState } from "react"

export default function Form(){
    let [formData , setFormData] =useState({
        fullName:"",
        userName:"",
        password:""
    });

    

    let handleInputChange= (event) =>{
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData((currData)=>{
           currData[fieldName] = newValue;
           return {...currData};
        })
    }
    let handleSubmit =(event)=>{
        event.preventDefault();
        setFormData({
            fullName:"",
            userName:"",
            password:""
        })
    }
    return (
        <form action="" onSubmit={handleSubmit}>

            <label htmlFor="fullName">Full Name</label>
            <input 
            placeholder="Enter Your Full Name " 
            type="text" 
            value={formData.fullName}
            onChange={handleInputChange}
            id="fullName"
            name="fullName"
            /> <br /><br />


            <label htmlFor="userName">User Name</label>
            <input 
            placeholder="Enter Username  " 
            type="text" 
            value={formData.userName}
            onChange={handleInputChange}
            id="userName"
            name="userName"
            /><br></br><br></br>

            <label htmlFor="password">Password</label>
            <input 
            placeholder="Enter password  " 
            type="password" 
            value={formData.password}
            onChange={handleInputChange}
            id="password"
            name="password"
            /><br></br><br></br>


            <button>Submit</button>
        </form>
    )
}