import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = (props) => {

    const [adlog, setAdlog] = useState({username : "", password : ""})
    const [adminname, setAdminname] = useState()
    const navigate = useNavigate();
    const {showAlert} = props.showAlert
    props.setShow(false)
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('username')

    const handleChange = (e)=>{
        props.setShow(false)
        const name = e.target.name;
        const value = e.target.value;
        setAdlog({...adlog, [name] : value})
    }

    const handleAdminLogin = async (e)=>{
        e.preventDefault();
        props.setShow(false)
        try {
            let res = await fetch('http://localhost:8000/admin/login', {
                method : 'post',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({username : adlog.username, password : adlog.password})
            });
            res = await res.json();
            if(res.success)
            {
                sessionStorage.setItem('admin', res.id)
                sessionStorage.setItem('name', res.name)
                navigate('/books/cs');
                props.showAlert("Login Successfull", "success")
            }
            else 
            {
                props.showAlert("Please Enter Valid Credentials", "danger", 2500)
                navigate('/')
            }
        } catch (error) {

        }
    }
    const handleAdminCreate = ()=>{
        props.setShow(false)
        navigate('/adminsignup')
    }
  return (
    <>
        <h1 className='text-center'>For Admin </h1>
        <form action="form-group" onSubmit={handleAdminLogin}>
            <label htmlFor="username1">Username</label>
            <input type="text" name="username" id="username1"  className='form-control' onChange={handleChange} value={adlog.username}/>

            <label htmlFor="password1">Password</label>
            <input type="password" autoComplete='udhav' id="password1" name="password" className='form-control' onChange={handleChange} value={adlog.password}/>

            <div className="flex-column">
                <button className='btn btn-success mt-1 mt-md-2 mx-3 '>Sign in</button>
                <button className='btn btn-primary mt-1 mt-md-2' type='button' onClick={handleAdminCreate}>Create Account</button>
            </div>
        </form>
    </>
  )
}

export default AdminLogin