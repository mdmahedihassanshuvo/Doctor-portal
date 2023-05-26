import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'logout successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    const listItem = <>
        <li>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    isActive
                        ? "text-[#0FCFEC]"
                        : ""
                }
            >
                <span className='font-semibold'>Home</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/about'
                className={({ isActive }) =>
                    isActive
                        ? "text-[#0FCFEC]"
                        : ""
                }
            >
                <span className='font-semibold'>About</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/review'
                className={({ isActive }) =>
                    isActive
                        ? "text-[#0FCFEC]"
                        : ""
                }
            >
                <span className='font-semibold'>Reviews</span>
            </NavLink>
        </li>
        <li>
            <NavLink
                to='/contact'
                className={({ isActive }) =>
                    isActive
                        ? "text-[#0FCFEC]"
                        : ""
                }
            >
                <span className='font-semibold'>Contact Us</span>
            </NavLink>
        </li>
        {user ? <>
            <li><Link to='/checklist'><button className='font-semibold'>My Appointment</button></Link></li>
            <li><button onClick={handleLogout} className='font-semibold'>Logout</button></li>
        </> :
            <li><Link to='/login'><button className='font-semibold'>Login</button></Link></li>}
    </>

    return (
        <div className='lg:mx-4 mb-4'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {listItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {listItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/appointment' className="btn btn-accent text-white">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;