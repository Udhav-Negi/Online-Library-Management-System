import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = (props) => {
    const {returnId, setReturnId} = props
    const navigate = useNavigate();
    const location = useLocation();
    
    // props.setShow(false)

    const handleLogout = ()=>{
        console.log('inisde log out ')
        if(sessionStorage.getItem('admin'))
        {
            // sessionStorage.removeItem('name')
            sessionStorage.removeItem('admin')
        }
        props.showAlert("Logout successfull", "success")
        props.setShow(false)
        return navigate('/')
    }
    const handleMyAccount = ()=>{
        // This endpoint will fetch the details of the book issued by the admin 
        console.log('inside handle my account ')
        navigate('/admin/detail')
    }

    const returnBook = ()=>{
        navigate('/user/return')
    }
    const handleAddBook = ()=>{
        navigate('/admin/addbook')
    }

    const handleLogoutUser = ()=>{
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('username');
        navigate('/')
    }

  return (
    <>
    <div className="row">
        {/* <ReturnModal /> */}
        <div className="col">
            <nav className="navbar navbar-dark bg-dark navbar-expand-xl">
                <div className="navbar-brand">
                    <h4>Library Management System </h4>
                </div>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target='.collapse' >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-pills">
                            <Link to="/books/cs" className={`nav-link ${location.pathname === '/books/cs' ? "active" : ""}`}>Computer Science </Link>
                        </li>
                        <li className="nav-item nav-pills">
                            <Link to="/books/ece" className={`nav-link ${location.pathname === '/books/ece' ? "active" : ""}`}>Electronics and Communication</Link>
                        </li>
                        <li className="nav-item nav-pills">
                            <Link to="/books/ce" className={`nav-link ${location.pathname === '/books/ce' ? "active" : ""}`}>Civil Engineering</Link>
                        </li>
                        <li className="nav-item nav-pills">
                            <Link to="/books/me" className={`nav-link ${location.pathname === '/books/me' ? "active" : ""}`}>Mechanical Engineering</Link>
                        </li>
                        <li className="nav-item nav-pills">
                            <Link to="/books/bt" className={`nav-link ${location.pathname === '/books/bt' ? "active" : ""}`}>Biotechnology</Link>
                        </li>
                        <li className="nav-item nav-pills">
                            <Link to="/books/fin" className={`nav-link ${location.pathname === '/books/fin' ? "active" : ""}`}>Finance</Link>
                        </li>
                        <li className="nav-item nav-pills">
                            <Link to="/books/mark" className={`nav-link ${location.pathname === '/books/mark' ? "active" : ""}`}>Marketing</Link>
                        </li>
                    </ul>
                    
                    { props.show && sessionStorage.getItem('admin') && <div className="dropdown ms-auto">
                        <button data-bs-toggle="dropdown" type="button"  className={"btn btn-danger ms-auto dropdown-toggle" }  >{sessionStorage.getItem('name')}</button>

                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><div className="dropdown-item" onClick={handleMyAccount}>My Account</div></li>
                            <li><div className="dropdown-item" onClick={returnBook}>Return Book</div></li>
                            <li><div className="dropdown-item" onClick={handleAddBook}>Add Book</div></li>
                            <li><div className="dropdown-item" onClick={handleLogout}>Log Out</div></li>
                        </ul>
                    </div> }

                    {sessionStorage.getItem('user') && sessionStorage.getItem('username') && <div className="dropdown ms-auto"> 
                        <button data-bs-toggle="dropdown" type="button" className="btn btn-danger ms-auto dropdown-toggle">{sessionStorage.getItem('username')}</button> 
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><div className="dropdown-item" onClick={handleLogoutUser}>Log Out</div></li>
                        </ul>
                    </div>}

                </div>
            </nav>
        </div>
    </div>
    </>
  )
}

export default Navbar