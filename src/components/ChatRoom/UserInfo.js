
import { Button, Avatar, Typography } from "antd";
import React from "react";
import styled from "styled-components";
import { auth } from "../../firebase/config";
import {AuthContext} from  '../../Context/AuthProvider'



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
    

    const {
        user: {displayName, photoURL},
    } = React.useContext(AuthContext);
    //console.log({data});
    return(
        <WapperStyded>
            <div>
            <Avatar src={photoURL}>
          {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography.Text className='username'>{displayName}</Typography.Text>
            </div>
            <Button ghost
            onClick={() => auth.signOut()}
          > Đăng xuất</Button>
        </WapperStyded>
    )
}