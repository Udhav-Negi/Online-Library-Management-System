import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSignup = (props) => {
    const [adcreate, setAdcreate] = useState({username : "", name : "", password : "", email : "", number : ""})

    const navigate = useNavigate();

    const handleChange = (e)=>{
        props.setShow(false)
        const name = e.target.name;
        const value = e.target.value;
        setAdcreate({...adcreate, [name] : value})
    }

    const createAdmin = async (e)=>{
        e.preventDefault();
        props.setShow(false)
        console.log('Inside create admin ')
        console.log('adcreate is ', adcreate)
        try { 
            let res = await fetch('http://localhost:8000/admin/signup', {
                method : 'post',
                headers : {
                    "Content-type" : 'application/json'
                },
                body : JSON.stringify({username : adcreate.username, name : adcreate.name, password : adcreate.password, email : adcreate.email, number : adcreate.number})
    
            })

            res = await res.json();
            if(res.success)
            {
                props.showAlert("Admin account created successfully", "success")
                navigate('/')
            }
            else 
            {
                props.showAlert("Please enter unique username and email", "warning")
            }
            
        } catch (error) {
        }
    }

    const handleAdminAlready = ()=>{
        props.setShow(false)
        navigate('/')
    }
  return (
    <>
        <h1 className='text-center'>Create Account for Admin</h1>
        <form action="" className='form-group' onSubmit={createAdmin}>
            <label htmlFor="username">Username</label>
            <input type="text" className='form-control' id="username" name="username" onChange={handleChange} value={adcreate.username}/>
            
            <label htmlFor="name">Name</label>
            <input type="text" className='form-control' id="name" name="name" onChange={handleChange} value={adcreate.name}/>

            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' id="password" name="password" onChange={handleChange} value={adcreate.password}/>

            <label htmlFor="email">Email</label>
            <input type="email" className='form-control' id="email" name="email" onChange={handleChange} value={adcreate.email}/>

            <label htmlFor="number">Contact Number</label>
            <input type="number" className='form-control' id="number" name="number" onChange={handleChange} nvalue={adcreate.number}/>
            
            <div className="flex-column mt-2">
                <button className='btn btn-primary mx-2'>Create Account </button>
                <button type='button' className='btn btn-success' onClick={handleAdminAlready}>Already have account </button>
            </div>
        </form>
    </>
  )
}

export default AdminSignup