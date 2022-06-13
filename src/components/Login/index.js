import React from "react";
import {Row, Col, Button, Typography} from 'antd';
import firebase,{ auth } from '../../firebase/config';
import { addDocument } from "../../firebase/services";

const {Title}= Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login(){
    
    const handleLogin = async () =>{
       const {additionalUserInfo, user} =await auth.signInWithPopup(fbProvider)

       if(additionalUserInfo?.isNewUser){
        addDocument('users', {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.displayName,
            providerId: additionalUserInfo.providerId,
        })
       }
       ;
    };
    

    return(
        <div>
            <Row justify='center' style={{height: 800}}>
                <Col span={8}>
                <Title style={{textAlign:'center'}} Level={3}
                >
                 Thiên Di Chat
                </Title>
                <Button style={{width:'100%', marginButton:5}}>
                    Đăng nhập bằng google
                </Button>
                <Button
                   style={{ width: '100%' }}
                   onClick={() => handleLogin(fbProvider)}
                >
                Đăng nhập bằng Facebook
                </Button>
                </Col>
            </Row>
        </div>
    );
}