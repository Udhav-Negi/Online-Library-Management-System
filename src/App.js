import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AdminLogin from './Components/Login/AdminLogin'
import UserLogin from './Components/Login/UserLogin'
import UserSignUp from './Components/Signup/UserSignUp'
import AdminSignup from './Components/Signup/AdminSignup'
import ComputerScience from './Components/Books/ComputerScience'
import AdminDetail from './Components/Details/AdminDetail'
import Biotech from './Components/Books/Biotech'
import Ece from './Components/Books/Ece'
import Civil from './Components/Books/Civil'
import Mechanical from './Components/Books/Mechanical'
import Finance from './Components/Books/Finance'
import Marketing from './Components/Books/Marketing'
// import UserDetails from './Components/Details/UserDetails'
import UserReturnBooks from './Components/Return Books/UserReturnBooks'
import AddBook from './Components/Admin Add Book/AddBook'
import Alert from './Components/Alert/Alert'
import UserDetail from './Components/Details/UserDetail'

const App = () => {
  const [show, setShow] = useState(false)
  const [returnId, setReturnId] = useState()
  const [alert, setAlert] = useState({message : "", type : ""})

  const showAlert = (message, type, time=1500)=>{
    console.log('inisde show alert')
    setAlert({message : message, type : type})
    setTimeout(()=>{
      setAlert({message : "", type : ""})
    }, time)
  }
  return (
    <>
    
      <Router>
        <div className="container-fluid" >
          <Navbar show={show} returnId={returnId} setReturnId={setReturnId} setShow={setShow} showAlert={showAlert}/>
          <Alert alert={alert} />
        </div>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<div className="row ">
              <div className="col-md-6">
                <AdminLogin setShow={setShow} showAlert={showAlert}/>
              </div>
              <div className="col-md-6">
                <UserLogin setShow={setShow} showAlert={showAlert}/>
              </div>
            </div>} />

            <Route exact path='/usersignup' element={<div className='row'>
              <div className="col">
                <UserSignUp setShow={setShow} showAlert={showAlert}/>
              </div>
            </div>} />

            <Route exact path='/adminsignup' element={<div className='row'>
              <div className="col">
                <AdminSignup setShow={setShow} showAlert={showAlert}/>
              </div>
            </div>} />

            <Route exact path='/books/cs' element={<ComputerScience setShow={setShow} showAlert={showAlert}/>} />
            <Route exact path='/books/bt' element={<Biotech setShow={setShow} showAlert={showAlert}/>}/>
            <Route exact path='/books/ece' element={<Ece setShow={setShow} showAlert={showAlert}/>}/>
            <Route exact path='/books/ce' element={<Civil setShow={setShow} showAlert={showAlert}/>}/>
            <Route exact path='/books/me' element={<Mechanical setShow={setShow} showAlert={showAlert}/>}/>
            <Route exact path='/books/bt' element={<Biotech setShow={setShow} showAlert={showAlert}/>}/>
            <Route exact path='/books/fin' element={<Finance setShow={setShow} showAlert={showAlert}/>} />
            <Route exact path='/books/mark' element={<Marketing setShow={setShow} showAlert={showAlert}/>} />

            <Route exact path="/admin/detail" element={<AdminDetail setShow={setShow}/>} /> 
            <Route exact path="/user/return" element={<UserReturnBooks showAlert={showAlert}/>} />
            <Route exact path='/user/detail' element={<UserDetail />}/>

            {/* The following route is to add the book through admin */}
            <Route exact path='/admin/addbook' element={<AddBook setShow={setShow} showAlert={showAlert}/> }/>
          </Routes>
        </div>
      </Router> 
    </>
  )
}

export default App

