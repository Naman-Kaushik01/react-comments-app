import { useState } from 'react'
import { useFormik } from 'formik';
export default function CommentsForm({addNewComment}){

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username cannot be empty';
   } 
 
 
   return errors;
 };
 


    // let [formData , setFormData] =useState({
    //     username:"",
    //     remarks:"",
    //     rating: 5,
    //   });
      
     const formik = useFormik({
     initialValues: {
       username: '',
       remarks: '',
       rating: 5,
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
    
    //   let handleInputChange =(event)=>{
    //     setFormData((currData)=>{
    //       return {...currData,[event.target.name]: event.target.value};
    //     });
    //   }
    //   let handleSubmit =(event)=>{
       
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //     username:"",
    //     remarks:"",
    //     rating: 5,
    //     })
    //   }
    return (
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit={formik.handleSubmit}>
        <label htmlFor="UserName">UserName</label>
        <input type="text" 
        placeholder='username'value={formik.values.username} 
        onChange={formik.handleChange}
        id='UserName' 
        name='username'
        /> 
        {formik.errors.username ? <div style={{color:"red",backgroundColor:"white",marginTop:"5px"}}>{formik.errors.username}</div> : null}
        <br /><br />

        <label htmlFor="Remarks">Remarks</label>
        <textarea placeholder='Add Few Remarks' 
        value={formik.values.remarks} 
        onChange={formik.handleChange}
        id='Remarks'
        name='remarks'
        >Remarks</textarea>
        <br /><br />

        <label htmlFor="Rate">Rate Us</label>
        <input type="number" 
        placeholder='rating' min={1} max={5} 
        value={formik.values.rating} 
        onChange={formik.handleChange} 
        id='Rate'
        name='rating'
        />
        <br /><br />

        <button type='submit'>Add Comment</button>
      </form>
        </div>
    )
}