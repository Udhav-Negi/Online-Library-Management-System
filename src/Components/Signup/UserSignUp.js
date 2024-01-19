import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const UserSignUp = (props) => {
    const navigate = useNavigate();
    const [usercreate, setUsercreate] = useState({username : "", name : "", email : "", number : ""})

    const handleChange = (e)=>{
      props.setShow(false)
      const name = e.target.name;
      const value = e.target.value;
      setUsercreate({...usercreate, [name] : value});
    }
    props.setShow(false);

    const createUser = async (e)=>{
      props.setShow(false)
        e.preventDefault();
        try {
            let res = await fetch('http://localhost:8000/user/signup', {
                method : 'post',
                headers : {
                    "Content-Type" : 'application/json'
                },
                body : JSON.stringify({username : usercreate.username, name : usercreate.name, email : usercreate.email, number : usercreate.number})
    
            })

            res = await res.json();
            if(res.success)
            {
              props.showAlert("User account created successfully", "success")
              navigate('/')
            }
            else 
            {
              props.showAlert("Please use different credentials", "warning")
            }
            
        } catch (error) {
        }
    }

    const handleUserAlready = ()=>{
      props.setShow(false)
        navigate('/')
    }
  return (
    <>
        <h1 className='text-md-center'>Create Account for User</h1>
      <form action="" className='form-group' onSubmit={createUser}>
          <label htmlFor="username">Username</label>
          <input type="text" className='form-control' id="username" name="username" onChange={handleChange} value={usercreate.username}/>
          
          <label htmlFor="name">Name</label>
          <input type="text" className='form-control' id="name" name="name" onChange={handleChange} value={usercreate.name}/>

          <label htmlFor="email">Email</label>
          <input type="email" className='form-control' id="email" name="email" onChange={handleChange} value={usercreate.email}/>

          <label htmlFor="number">Number</label>
          <input type="number" className='form-control' id="number" name="number" onChange={handleChange} value={usercreate.number}/>

          <div className="flex-column mt-2">
            <button className='btn btn-primary mx-2'>Create Account </button>
            <button type='button' className='btn btn-success' onClick={handleUserAlready}>Already have account </button>
          </div>
      </form>
    </>
  )
}

export default UserSignUp