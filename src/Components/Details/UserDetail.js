import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBooksIssuedToUser } from '../Utility Function/User Utility'

const UserDetail = () => {
    const [booksIssuedToUser, setBooksIssuedToUser] = useState([])
    const [change, setchange] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
      console.log('running user details ');
        if(!sessionStorage.getItem('user') && !sessionStorage.getItem('username'))
        return navigate('/')

        async function getData()
        {
            let books = await getBooksIssuedToUser(sessionStorage.getItem('user'));
            setBooksIssuedToUser(books.data);
            // console.log('books issued are ', books.data);
        }
        getData();
    }, [change])
  return (
    <>
        <div className="row">
          {booksIssuedToUser.length === 0 && <div className="col-md-6 text-md-center mt-md-4">
            No Books issued
          </div>}
          {booksIssuedToUser && booksIssuedToUser.map((elem)=>{
            return (
              <div className=" col-sm-6 col-md-4 col-lg-3" key={elem._id}>
                <div className="card mt-3 border-primary" >
                    <img src={elem.image} alt="" className="card-img-top" style={{height : "10rem"}}/>
                    <div className="card-body">
                      <h3 className="card-title">{elem.book_name}</h3>
                      <h4 className="card-title">{elem.book_author}</h4>
                      <div className="card-subtitle">{elem.book_model}</div>
                      <div className="card-text">Issued by  <span className='text-primary '>{elem.admin_name}</span></div>
                      <div className='card-text '>Issued at {elem.date}</div>
                    </div>
                    {/* {elem.issued_by === sessionStorage.getItem('admin') ? <button className='btn btn-primary' onClick={()=> handleUserReturnBook(elem._id, elem.book_id, elem.book_model)}>Return Book</button> : <button className='btn btn-danger' disabled={true}>Return Book</button>} */}
                </div>
            </div>
            )
          })}
      </div>
    </>
  )
}

export default UserDetail