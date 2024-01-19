import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddBook = (props) => {
  const [addbookcred, setAddbookcred] = useState({addbookname : "", addbooktype : "Biotechnology", addbookauthor : "", image : "https://fakeimg.pl/667x1000/cc6600", count : 20})

  const navigate = useNavigate();

  useEffect(()=>{
    if(!sessionStorage.getItem('admin') || !sessionStorage.getItem('name'))
    return navigate('/')
  })

  const {showAlert} = props.showAlert

  const handleAddBookChange = (e)=>{
    const name = e.target.name 
    const value = e.target.value 
    setAddbookcred({...addbookcred, [name] : value})
  }
  const handleAddBookSubmit = async (e)=>{
    try {
          e.preventDefault();

          let resp11 = await fetch('http://localhost:8000/books/addbook', {
            method : "post",
            headers : {
              'Content-type' : 'application/json'
            },
            body : JSON.stringify({name : addbookcred.addbookname, type : addbookcred.addbooktype, author : addbookcred.addbookauthor, image : addbookcred.image, count : addbookcred.count})
          })

          props.showAlert("Book Successfully Added", "success")
          setAddbookcred({addbookname : "", addbooktype : "", addbookauthor : "", image : "https://fakeimg.pl/667x1000/cc6600", count : 20})
          resp11 = await resp11.json()
    } 
    catch (error) {
      
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center" style={{border : "3px solid red"}}>
          <div className="col-md-6">
          <h3 className='text-center text-success text-md-lg'>Please enter book details to add book</h3>
              <form action="" className='form-group ' onSubmit={handleAddBookSubmit}>
                  <label htmlFor="addbookname">Book Name</label>
                  <input type="text" name="addbookname" id="addbookname" className="form-control" onChange={handleAddBookChange} value={addbookcred.addbookname} required={true} />
                  

                  <div>
                    <label htmlFor="addbooktype" >Book type</label>
                    <select name="addbooktype" id="addbooktype" className='form-control' onChange={handleAddBookChange} value={addbookcred.addbooktype} >
                      
                        <option value="Biotechnology">Biotechnology</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                        <option value="Finance">Finance</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                    </select>

                  </div>
                  
                  <label htmlFor="addbookauthor">Author Name</label>
                  <input type="text" name="addbookauthor" id="addbookauthor" className='form-control' onChange={handleAddBookChange} value={addbookcred.addbookauthor} required={true}/>

                  <button className='btn btn-primary mt-3'>Add Book</button>
              </form>
          </div>
      </div>

    </div>
  )
}

export default AddBook