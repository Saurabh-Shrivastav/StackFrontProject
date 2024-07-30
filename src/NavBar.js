import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import AddProduct from './Components/AddProduct'
import UpdateProduct from './Components/UpdateProduct'
import Logout from './Components/Logout'
import Profile from './Components/Profile'
import Signup from './Components/Signup'
import PrivateComponent from './Components/PrivateComponent'

function NavBar() {
    const auth = localStorage.getItem('users')
    const navigate = useNavigate()

    const logOut = () => {
        localStorage.clear()
        navigate('/signup')
    }




    return (
        <div>
            <ul className='nav-ul'>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/add">Add Product</Link>
                </li>
                <li>
                    <Link to="/update">Update Product</Link>
                </li>

                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>{
                    auth ? <Link onClick={logOut} to="/logout">Logout</Link>
                        :
                        <Link to="/signup">Signup</Link>
                }
                </li>

            </ul>

            <Routes>

                <Route element={<PrivateComponent />} >
                    <Route path='/' element={<Home />} />
                    <Route path='/add' element={<AddProduct />} />
                    <Route path='/update' element={<UpdateProduct />} />
                    <Route path='/logout' element={<Logout />} />
                    <Route path='/profile' element={<Profile />} />
                </Route>

                <Route path='/signup' element={<Signup />} />
            </Routes>


        </div>
    )
}

export default NavBar
