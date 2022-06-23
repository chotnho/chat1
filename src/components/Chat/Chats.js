import React, { useRef, useState, useEffect } from "react"

import axios from 'axios'
import { useNavigate} from "react-router-dom"
import { ChatEngine } from 'react-chat-engine'

import { useAuth } from '../../context/AuthContext'
 import { auth } from '../../Firebase/Firebase'


export default function Chats() {
  const didMountRef = useRef(false)
  const [ loading, setLoading ] = useState(true)
  const { user } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await auth.signOut()
    navigate("/")
  }

  async function getFile(url) {
    let response = await fetch(url);
    let data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: 'image/jpg' });
  }

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true

      if (!user || user === null) {
        navigate("/")
        return
      }
      

      axios.get(
        'https://api.chatengine.io/users/me/',
        { headers: { 
          "project-ID": '784bdb9e-8724-4f63-8ab6-3c10d59f74a7',
          "user-Name": user.email,
          "user-secret": user.uid,
          "private-key": "a4420c6c-7e01-454a-9242-020360dd4f27"
        },
    })

      .then(() => setLoading(false))

      .catch(e => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.email)
        formdata.append('secret', user.uid)

        getFile(user.photoURL)
        .then(avatar => {
          formdata.append('avatar', avatar, avatar.name)

          axios.post(
           'https://api.chatengine.io/users/' ,
            formdata,
            { headers: { "private-key": "a4420c6c-7e01-454a-9242-020360dd4f27"}}
          )
          .then(() => setLoading(false))
          .catch(e => console.log('e', e.response))
        })
      })
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    }
  }, [user, navigate])
  

  if (!user || loading) return <div />

  return (
    <div className='chats-page'>
      <div className='nav-bar'>
        <div className='logo-tab'>
          Unichat
        </div>

        <div onClick={handleLogout} className='logout-tab'>
          Logout
        </div>
      </div>

      <ChatEngine 
        height='calc(100vh - 66px)'
        projectID='6a5f98ba-92f8-47dd-9a55-9bfd3a40ed17'
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}






// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import {  ChatEngine } from 'react-chat-engine'
// import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../../context/AuthContext'
// import { auth } from '../../Firebase/Firebase'

// const Chats = () => {
//     const navigate = useNavigate();
//     const {user} = useAuth();
//     const [loading, setLoading] = useState(true);

//     const handleLogout = async ()=>{
//         await auth.signOut();
//         navigate('/')
//     }
//     const getFile = async (url) =>{
//         const response = await fetch(url);
//         const data = await response.blob();

//         return new File ([data], "userPhoto.jpg", {type: 'image/jpeg'});
//     }
//     useEffect (() => {
//         if(!user) {
//             navigate('/');

//             return;
//         }

//         axios.get('https://api.chatengine.io/users/me', {
//             headers: {
//                 "project-id": "6a5f98ba-92f8-47dd-9a55-9bfd3a40ed17",
//                 "user-name": user.email,
//                 "user-secret": user.uid,
//             }
//         })
//         .then (() => {
//             setLoading(false);
//         })
//         .catch(() => {
//             let formdata = new FormData()
//             formdata.append('email', user.email);
//             formdata.append('username', user.displayName);
//             formdata.append('secret', user.uid);

//             getFile(user.photoURL)
//                 .then((avatar) =>{
//                     formdata.append('avatar', avatar, avatar.name);

//                     axios.post('https://api.chatengine.io/user/',
//                     formdata,
//                     { headers: {"private": "a4420c6c-7e01-454a-9242-020360dd4f27"} }
//                     )
//                     .then(() => setLoading(false))
//                     .catch((error) => console.log(error))
                   
//                 })
//         })
//     }, [user, navigate]);

// if(!user || loading) return 'Loading....';

//   return (
//     <div className='chats-page'>
//         <div className='nav-bar'>
//             <div className='logo-tab'>
//                 ThienDi Chats
//             </div>
//             <div onClick={handleLogout} className='logout-tab'>
//                 logout
//             </div>
//         </div>
//         <ChatEngine
//         height ="calc(100vh-66px)"
//         projectID="
//         6a5f98ba-92f8-47dd-9a55-9bfd3a40ed17"
//         userName={user.email}
//         userSecret={user.uid}
//         />
        
//     </div>
//   )
// }
// export default Chats