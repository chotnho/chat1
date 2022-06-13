import React from "react";
import{Button, Collapse, Typography} from 'antd'
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";

const {Panel} = Collapse
const PanelStyded = styled(Panel)`
    &&& {
        .ant-collapse-header,
        p{
            color: white;
        }
        .ant-collapse-content-box{
            padding: 0 40px;
        }

        .add-room {
            color: white;
            padding: 0;
        }
    }
`;

const LinkStyded = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;

export default function RoomList() {
    return(
        <Collapse ghost defaultActiveKey={['1']}>
         <PanelStyded header="Danh sách các phòng" key={'1'}>
             <LinkStyded>Room1</LinkStyded>
             <LinkStyded>Room2</LinkStyded>
             <LinkStyded>Room3</LinkStyded>
             <Button type='text' icon={<PlusSquareOutlined/>} 
             className="add-room">Thêm phòng</Button>
         </PanelStyded>
        </Collapse>
    )
}