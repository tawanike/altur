import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ChatHistoryContainer, Body, Message, MessageBody, MessageInfo, MessageAvatar } from './styles';


const ChatHistory = (props: any) => {
    return(<ChatHistoryContainer>
        {props.messages.map((message: any, index: number) => {
            return(<Message outgoing={message.outgoing}>
                {message.outgoing && <MessageAvatar><Avatar size="small" icon={<UserOutlined />} /></MessageAvatar>}
                <Body>
                    <MessageBody outgoing={message.outgoing}>{message.message}</MessageBody>
                    <MessageInfo>{props.from} ~ {message.created_at}</MessageInfo>
                </Body>
            </Message>)
        })}
    </ChatHistoryContainer>);
}

export default ChatHistory;