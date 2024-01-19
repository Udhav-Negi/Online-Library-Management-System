import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const UserLogin = (props) => {

    const [userlog, setUserlog] = useState({username : "", email : ""})

    const navigate = useNavigate();
    sessionStorage.removeItem('admin')
    sessionStorage.removeItem('name')
    const {showAlert} = props.showAlert;
    props.setShow(false)

    const handleChange = (e)=>{
        props.setShow(false)
        const name = e.target.name;
        const value = e.target.value;
        setUserlog({...userlog, [name] : value})
    }

    const handleUserLogin = async (e)=>{
        e.preventDefault();
        console.log('userlogin is ', userlog);
        props.setShow(false)
        try {
            let loginResp = await fetch('http://localhost:8000/user/login', {
                method : "post",
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({username : userlog.username, email : userlog.email})
            })
            loginResp = await loginResp.json();
            console.log('loginresp in handle user login is ', loginResp);
            if(loginResp.success)
            {
                console.log('inside success');
                props.showAlert("User login successfull", "success")
                sessionStorage.setItem('user', loginResp.id);
                sessionStorage.setItem('username', loginResp.user);
                return navigate('/user/detail')
            }
            else
            {
                return props.showAlert("Please Enter valid user credentials", "danger", 2500)
            }

        } catch (error) {
            console.log('inisde catch for userLogin in client')
        }
    }

    const handleUserCreate = ()=>{
        props.setShow(false)
        navigate('/usersignup')
    }

  return (
    <>
        <h1 className='text-center'>For Students </h1>
        <form action="" className='form-group' onSubmit={handleUserLogin}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className='form-control' onChange={handleChange} value={userlog.username}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className='form-control' onChange={handleChange} value={userlog.email}/>

            <div className="flex-column">
                <button className='btn btn-success mt-1 mt-md-2 mx-3 '>Sign in</button>
                <button className='btn btn-primary mt-1 mt-md-2' type='button' onClick={handleUserCreate}>Create Account</button>
            </div>
        </form>
    </>
  )
}

export default UserLogin