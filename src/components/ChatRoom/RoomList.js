import React from "react";
import{Button, Collapse, Typography} from 'antd'
import styled from "styled-components";
import { PlusSquareOutlined } from "@ant-design/icons";

import { AppContext } from "../../Context/AppProvider";

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
    const {rooms, setIsAddRoomVisible, setSelectedRoomId} = React.useContext(AppContext);
    console.log({rooms});
    const handleAddRoom = () =>{
        setIsAddRoomVisible(true)
    }
    return(
        <Collapse ghost defaultActiveKey={['1']}>
         <PanelStyded header="Danh sách các phòng" key='1'>
            {
                rooms.map((room) => (
                    <LinkStyded key={room.id} onClick={() => setSelectedRoomId(room.id)}>{room.name}</LinkStyded>
                ))}
             <Button type='text' icon={<PlusSquareOutlined/>} 
             className="add-room" onClick={handleAddRoom}>Thêm phòng</Button>
         </PanelStyded>
        </Collapse>
    )
}