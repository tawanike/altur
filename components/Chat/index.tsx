import { useState } from 'react';
import { Avatar, Button, Input, Badge } from 'antd';
import ChatHistory from './ChatHistory';
import { MessageOutlined, SendOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';
import { ChatBubble, Chatbox, ChatContainer, ChatInput, PoweredBy } from './styles';


const Chat = () => {
    const [showBox, setShowBox] = useState(false);
    const [thread, setThread] = useState({
        from: 'AlturBot',
        messages: [
            {message: 'Hi, I am AlturBot', outgoing: true, created_at: Date.now() },
            {message: 'How can I help you today?', outgoing: false, created_at: Date.now() },
            {message: 'We are a software consultancy that uses technology to solve complex user experience, data science and software problems', outgoing: true, created_at: Date.now()},
            {message: 'We partner with our clients to design and implement software that is scalable, viable and flexible.', outgoing: false, created_at: Date.now()},
        ],
        created_at: Date.now(),
        read: false
    });

    return(<ChatContainer>
        {showBox && <Chatbox>
            <div className="container" style={{backgroundColor: '#f5f8fa'}}>
                <div className="row p-3" style={{ height: 55}}>
                    <div className="col-10">
                        <Avatar size="small" icon={<UserOutlined />} />&nbsp;
                        { thread.from }
                    </div>
                    <div className="col-2">
                        <Button onClick={() => setShowBox(false)}><CloseOutlined /></Button>
                    </div>
                </div>
            </div>

            <ChatHistory from={thread.from} messages={thread.messages}/>

            <ChatInput>
                <Input className="" />
                <Button size="large"><SendOutlined /></Button>
            </ChatInput>
            <PoweredBy>Powered by&nbsp;<a href="https://www.altur.io/chat?utm_source=chatbox" target="_blank">Altur</a></PoweredBy>
        </Chatbox>}
        {showBox || <ChatBubble onClick={() => setShowBox(true)}>
        <Badge dot status="success"><MessageOutlined style={{ fontSize: 48}} /></Badge>
        </ChatBubble>}
    </ChatContainer>)
}

export default Chat;