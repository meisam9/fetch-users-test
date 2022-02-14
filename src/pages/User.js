import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserDetais } from '../store/User/user.actions'
import {FaFacebook,FaLinkedin,FaYoutube,FaTwitter, FaGoogle} from 'react-icons/fa';
import './user.style.css'

export default function User() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user)
    useEffect(()=>{
        dispatch(getUserDetais(id));
    },[id])
    console.log(user)
  return (
    <div className="container d-flex justify-content-center">
    <div className="card p-3 py-4">
        <div className="text-center"> <img src={user.user.avatar} width="100" className="rounded-circle"/>
            <h3 className="mt-2">{user.user.first_name} {user.user.last_name}</h3> <span className="mt-1 clearfix">Android Developer</span> <small className="mt-4">I am an android developer working at google Inc at california,USA</small>
            <div className="social-buttons mt-5">
                 <button className="neo-button"><FaGoogle style={{color:'#dc4e41'}}/> </button> <button className="neo-button"><FaFacebook style={{color:'#3b5998'}}/></button> 
                 <button className="neo-button"> <FaLinkedin style={{color:'#0077b5'}}/></button> 
                 <button className="neo-button"><FaYoutube style={{color:'#cd201f'}}/> </button> 
                 <button className="neo-button"><FaTwitter style={{color:'#55acee'}}/> </button> 
            </div>
        </div>
    </div>
</div>
  )
}
