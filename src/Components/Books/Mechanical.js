import React, { useEffect, useState} from 'react'
import Modal from '../Details/Modal'
import { useNavigate } from 'react-router-dom'

const Mechanical = (props) => {
    const navigate = useNavigate();
    const [bookDetail, setBookDetail] = useState({id : "", image : "", book_name : "", book_author : ""})
    const [change, setChange] = useState(false)
    const [data, setData] = useState()

    useEffect(()=>{
      if(!sessionStorage.getItem('admin') && !sessionStorage.getItem('user') && !sessionStorage.getItem('username'))
      {
        return navigate('/')
      }
        props.setShow(true)
        const getData = async ()=>{
        let resp = await fetch('http://localhost:8000/books/me')
        resp = await resp.json();
        setData(resp.data)
        }
        getData()
    }, [change])
  return (
    <>
        <div className="row">
        <Modal book_model="Mechanical" issued_by={sessionStorage.getItem('admin')} image={bookDetail.image} book_id={bookDetail.id} book_name={bookDetail.book_name} book_author={bookDetail.book_author} change={change} setChange={setChange} showAlert={props.showAlert}/>
        {data && data.map((elem)=>{
          return (
            <div className=" col-sm-6 col-md-4 col-lg-3" key={elem._id}>
              <div className="card mt-3 border-primary" >

                <img src={elem.image} alt="" className="card-img-top" style={{height : "10rem"}}/>
                <div className="card-body">
                  <h3 className="card-title">{elem.name}</h3>
                  <h4 className="card-title">{elem.author}</h4>
                  <div className="card-subtitle">{elem.type}</div>
                  <div className="card-text">Books Reamaning {elem.count}</div>
                  {elem.count ? <div className="card-text text-primary">Available</div> : ""}
                  {!elem.count && <div className="card-text text-danger">Not Available</div>}
                </div>
                {!sessionStorage.getItem('user') && <button className='btn btn-success' disabled={!elem.count ? true : false} data-bs-toggle="modal" data-bs-target=".modal" onClick={()=> setBookDetail({id : elem._id, image : elem.image, book_name : elem.name, book_author : elem.author})}>Issue Book</button>}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Mechanical