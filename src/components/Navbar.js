import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { FaUserTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logoutUser } from '../store/User/user.actions'

export default function NavMenu() {
    const dispatch=useDispatch();
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logoutUser())
        navigate('/')

    }
  return (
    <Navbar variant="dark" bg="dark" fixed="top" className='mb-4'>
        <Container >
            <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/users" >

                 Users

            </NavLink>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <button className='btn btn-primary' onClick={handleLogout}>
                    <span className='mx-2'>Log Out </span>
                    <FaUserTimes/>
                </button>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
</Navbar>
  )
}
