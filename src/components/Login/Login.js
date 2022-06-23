import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons'
import React from 'react'
import { Button } from 'antd'
import firebase from 'firebase/compat/app'
import { auth } from '../../Firebase/Firebase'




const Login = () => {
  return (
    <div id='login-page'>
        <div id='login-card'>
            <h2>Wellcom to ThienDi chats!</h2>
           <div className="login-button">
              <div>
               <Button
                type="primary"
                icon={<GoogleOutlined />}
                onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                  Đăng nhập bằng google
                 </Button>

              </div >
              <div className="facebook">
              <Button 
                type="primary"
                icon={<FacebookOutlined />}
                onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
              >
                Đăng nhập bằng facebook
              </Button>

              </div>

            </div>
        </div>
    </div>
  )
}

export default Login