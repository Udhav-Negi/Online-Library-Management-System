import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AdminDetail = (props) => {
    const [change, setChange] = useState(false)
    const [data, setData] = useState()
    const navigate = useNavigate();
    useEffect(()=>{
        props.setShow(true)
        if(!sessionStorage.getItem('admin'))
        {
            return navigate('/')
        }
        async function getData(){
            try {
                let resp = await fetch('http://localhost:8000/admin/detail', {
                    method : 'post',
                    headers : {
                        'Content-type' : 'application/json'
                    },
                    body : JSON.stringify({admin_id : sessionStorage.getItem('admin')})
                });
                resp = await resp.json();
                setData(resp.message)
            } catch (error) {
                
            }
        }
        getData()

    }, [change])
  return (
    <div className="row">
        {data && data.map((elem)=>{
            return(
                <div className="col-sm-6 col-md-4 col-lg-3" key={elem._id}>
                    <div className='card mt-3 border-primary'>
                        <img src={elem.image} alt="" className="card-img-top" style={{height : "10rem"}}/>
                        <div className="card-body">
                            <h3 className="card-title">{elem.book_model}</h3>
                            <h4 className="card-title">{elem.book_name}</h4>
                            <h5 className="card-title">{elem.book_author}</h5>
                            <div className="card-text">Issued to  <span className='text-primary '>{elem.student_name}</span></div>
                            <small className='card-text text-danger'>Student id is {elem._id}</small>
                            <div className='card-text '>Issued at {elem.date}</div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default AdminDetail