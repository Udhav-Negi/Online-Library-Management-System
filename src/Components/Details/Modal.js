import React, {useState}from 'react'
import { checkUserCred, setBookToAdminAcc, updateBookCount } from '../Utility Function/Admin Utility'
import setBookToUserAcc from '../Utility Function/User Utility'

const Modal = (props) => {
    const [stucred, setStucred] = useState({name : "", email : "", })
    const [issued_to, setIssued_to] = useState()
    const {book_model, issued_by, image, book_id, book_name, book_author, change, setChange} = props


   
    const handleCredChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setStucred({...stucred, [name] : value});
    }
    const handleStuCredSubmit = async (e)=>{
        e.preventDefault();
        try {

            let res = await checkUserCred(stucred.name, stucred.email)
            let res1 = res;
            console.log('res1 for stucred is ', res);
            if(res.success)
            {
                setStucred({name : "", email : ""})
                setIssued_to({issued_to : res.data._id})

                    // This endpoint is to update the count of books
                    let resp = await updateBookCount(book_model, book_id)

                    // This endpoint is to set the book data to admin account 
                    resp = await setBookToAdminAcc(props.book_model, res1.data._id, props.issued_by, props.image, props.book_id, res1.data.name, book_name, book_author)

                    // This endpoint is to set the book to user account 
                    let admin_name = sessionStorage.getItem('name')
                    let resp1 = await setBookToUserAcc(props.book_model, res1.data._id, props.issued_by, props.image, props.book_id, admin_name, book_name, book_author, book_model )
                    
                    props.showAlert("Book issued ", "success", 2500)
                    setStucred({name : "", email : ""})
                    setChange(!change)

            }
            else 
            {
                props.showAlert("Please enter valid user credentials to issue the book", "danger", 2500)
            }
        } catch (error) {
            
        }
    }
  return (
    <div className="modal fade " data-bs-backdrop="static">
        <div className="modal-dialog ">
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className='card-text'>Enter student Details</h3>
                    <button className='btn btn-close' data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body" >
                    <form action="" className='form-group' onSubmit={handleStuCredSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" className='form-control' value={stucred.name} onChange={handleCredChange}/>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className='form-control'  value={stucred.email} onChange={handleCredChange}/>

                        <button className='btn btn-primary mt-2' data-bs-dismiss="modal">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal