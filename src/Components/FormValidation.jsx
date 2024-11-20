import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'




const FormValidation = () => {


    let [formData, setFormData] =  useState(
        {
            username:'',
            email:'',
            password1:'',
            password2:'',
    
        }
    )


 

    // let [name, setName] =  useState('')
    // let [email, setEmail] =  useState('')
    // let [pass1, setPass1] =  useState('')
    // let [pass2, setPass2] =  useState('')




    let [errors, setErrors] =  useState({})

    function handleChange(e){
        const { name, value } = e.target;

        setFormData({...formData,[name]:value});
    }


    function hadleSubmit(e){
        

        e.preventDefault()



        if(formData.username.trim()===""){
           alert("Username Required!")
        }
        else if(formData.username.trim().length < 3){
            alert("Username Shouldbe more than 3 Chars!")
        }
        if(formData.email.trim()===""){
            alert("Email Required!")
         }
      
    }

  return (
    <>
       <div className="container d-flex justify-content-center">
        <form action="" className='border border-secondary m-2 p-3 w-50' onSubmit={hadleSubmit}>

                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Enter Name</label>
                    <input type="text" className="form-control" placeholder='enter name here...' id="exampleInputName" aria-describedby="nameHelp" name='username' onChange={handleChange}/>
                    
                </div>    

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter Email</label>
                    <input type="email" className="form-control" value={formData.email} id="exampleInputEmail1" aria-describedby="emailHelp" name='email'  onChange={handleChange}/>
                </div>    

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Enter Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" name='password1'  onChange={handleChange}/>

                </div>   

                <div className="mb-3">
                    <label htmlFor="exampleConfirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleConfirmPassword" name='password2'  onChange={handleChange}/>
                    
                </div>   

                <div className="m-3">
                    <input className='form-control' type="submit" value="Submit Form" />
                </div>
        </form> 
       </div>
    </>
  )
}

export default FormValidation
