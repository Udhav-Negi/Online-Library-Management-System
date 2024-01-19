import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import { checkUserCred, updateBookCount } from '../Utility Function/Admin Utility'
import { getBooksIssuedToUser } from '../Utility Function/User Utility'

const UserReturnBooks = (props) => {

  const [returnCred, setReturnCred] = useState({returnName : "", returnEmail : ""})
  const [issuedbooks, setIssuedbooks] = useState([])
  const [userretid, setUserretid] = useState()
  const [book_id, setBook_id] = useState()
  const [load, setLoad] = useState(false)
  const navigate = useNavigate();

  const {showAlert} = props.showAlert;

  const handleReturnChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setReturnCred({...returnCred, [name] : value})
  }

  const handleReturnLogin = async (e)=>{
    e.preventDefault();
    try {
        let resp6 = await checkUserCred(returnCred.returnName, returnCred.returnEmail)
        setReturnCred({returnName : "", returnEmail : ""})
        if(resp6.success)
        {
          // Here we have to get all the books issued to the user 
          props.showAlert("User Login Successfull ", "success")
          setUserretid(resp6.data._id)
          let resp7 = await getBooksIssuedToUser(resp6.data._id);
          setIssuedbooks(resp7.data)
          setLoad(!load)

        }
        else 
        {
          showAlert("Invalid User Credential", "danger", 2500)
        }
    } 
    catch (error) {
      
    }
  }

  const handleUserReturnBook = async (id, book_id, book_model)=>{
    
    // This function will update the page after the book is returned 
    try {
      // This endpoint will remove the book from the user account 
      let resp10 = await fetch('http://localhost:8000/user/deleteissuedbook', {
        method : 'delete',
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify({id})
      })

      props.showAlert("Book returned successfully", "success")
      let newissuedbooks = issuedbooks.filter((elem)=> {
        return elem._id !== id
      })

      // This endpoint will remove the book from admin account
      resp10 = await fetch('http://localhost:8000/admin/deleteissuedbook', {
        method : 'delete',
        headers : {
          'Content-type' : 'application/json'
        },
        body : JSON.stringify({book_id})
      })

      // This endpoint will increase the book count when it is returned 
      
      resp10 = await updateBookCount(book_model, book_id, +1)

      setIssuedbooks(newissuedbooks)
      setLoad(!load)
    } catch (error) {
      console.log('inside catch in handle user return book ')
    }
  }

  useEffect(()=>{
    
    async function setUserReturnData()
    {
      if(!sessionStorage.getItem('name') && !sessionStorage.getItem('admin'))
      {
        navigate('/')
      }
      else 
      {
        let dat = await getBooksIssuedToUser(userretid);
        setIssuedbooks(dat.data)
      }
    }
    setUserReturnData()
  }, [load])
  
  return (
    <>
      <div className="row justify-content-center mt-5">
          <div className="col-md-6" onSubmit={handleReturnLogin}>
              <h3 className='text-center text-success text-lg'>User details to return the book</h3>
              <form action="" className='form-group'>
                  <label htmlFor="returnName">Name</label>
                  <input type="text" id="returnName" name="returnName" className='form-control' onChange={handleReturnChange} value={returnCred.returnName}/>

                  <label htmlFor="returnEmail">Email</label>
                  <input type="text" id="returnEmail" name="returnEmail" className='form-control' onChange={handleReturnChange} value={returnCred.returnEmail}/>

                  <button className='btn btn-primary mt-1 mt-md-2'>Log in</button>
              </form>
          </div>
      </div>

      <div className="row">
          {issuedbooks.length === 0 && <div className="col-md-6 text-md-center mt-md-4">
            No Books issued
          </div>}
          {issuedbooks && issuedbooks.map((elem)=>{
            return (
              <div className=" col-sm-6 col-md-4 col-lg-3" key={elem._id}>
              <div className="card mt-3 border-primary" >
                <img src={elem.image} alt="" className="card-img-top" style={{height : "10rem"}}/>
                <div className="card-body">
                  <h3 className="card-title">{elem.book_name}</h3>
                  <h4 className="card-title">{elem.book_author}</h4>
                  <div className="card-subtitle">{elem.book_model}</div>
                  <div className="card-text">Issued by  <span className='text-primary '>{elem.admin_name}</span></div>
                </div>
                  {elem.issued_by === sessionStorage.getItem('admin') ? <button className='btn btn-primary' onClick={()=> handleUserReturnBook(elem._id, elem.book_id, elem.book_model)}>Return Book</button> : <button className='btn btn-danger' disabled={true}>Return Book</button>}
              </div>
            </div>
            )
          })}
      </div>
    </>

  )
}

export default UserReturnBooks