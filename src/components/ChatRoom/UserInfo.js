//import { LogoutOutlined } from "@ant-design/icons";
import { Button, Avatar, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { auth, db } from "../../firebase/config";
const WapperStyded = styled.div`
display: flex;
justify-content: space-between;
padding: 12px 16px;
border-bottom: 1px solid rgba(238, 238, 238);

.username {
    color: white;
    margin-left: 5px;
}
`;


export default function UserInfo(){
    React.useEffect(() =>{
        db.collection('users').onSnapshot((snapshot) =>{
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            console.log({data, snapshot, docs: snapshot.docs});
        })
    })

    
    return(
        <WapperStyded>
            <div>
                <Avatar>Aaaa</Avatar>
                <Typography.Text className="username">Thiendi test</Typography.Text>
            </div>
            <Button ghost
            onClick={() => auth.signOut()}
          > Đăng xuất</Button>
        </WapperStyded>
    )
}