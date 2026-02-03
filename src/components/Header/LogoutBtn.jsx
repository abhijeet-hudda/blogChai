import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/features/authSlice'

function LogoutBtn() {

    const dispatch  = useDispatch()
    const logoutHandler = ()=>{
        authService.logout()
        .then(()=>dispatch(logout()))
    }
    return (
        <button
        className='inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40'
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutBtn
