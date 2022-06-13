import React from "react";
import {Row, Col} from 'antd'
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";
import styled from "styled-components";

const SidebarStyle = styled.div`
    background: #51C1A4;
    color: white;
    height: 100vh;
    box-shadow: 0 0 0 2px rgba(210, 215, 211)
`;

export default function Sidebar(){
    return (
        <SidebarStyle>
        <Row>
            <Col span={24}><UserInfo/></Col>
            <Col span={24}><RoomList/></Col>
        </Row>
        </SidebarStyle>
    )
    
}