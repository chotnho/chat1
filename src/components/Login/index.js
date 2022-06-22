import React from "react";
import {Row, Col, Button, Typography, Form} from 'antd';
import firebase,{ auth } from '../../firebase/config';
import { addDocument, generateKeywords } from "../../firebase/services";



const {Title}= Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export default function Login(){
    
    const handleLogin = async () =>{
       const {additionalUserInfo, user} =await auth.signInWithPopup(fbProvider)

       if(additionalUserInfo?.isNewUser){
        addDocument('users', {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
            providerId: additionalUserInfo.providerId,
            keywords: generateKeywords(user.displayName)
        })
       }
       ;
    };
    

    return(
        <Form

        > 
            <Row span={15} justify='center' 
                   style={{
                           height: 300,
                           backgroundColor:'#d9f7be', 
                           width: '50%', 
                            marginLeft:300,
                           marginTop: 100,
                          }}>
                 
                    
                <Col span={14}>
                <Title style={{textAlign:'center', marginTop: 30, color:'#ffadd2'}} Level={1}
                
                >
                Login with chats
                </Title>
                <Button 
                      type="primary"  className="login-form-button" 
                      style={{width:'100%', marginTop: 10 , marginButton:20}}   
                      onClick={() => handleLogin(googleProvider)}>
                    Đăng nhập bằng google
                </Button>
                <Button 
                    type="primary" className="login-form-button"
                    style={{ width: '100%', marginTop: 15 }}
                    onClick={() => handleLogin(fbProvider)}
                >
                Đăng nhập bằng Facebook
                </Button>
                </Col>
            </Row>            
        </Form>
    );
}