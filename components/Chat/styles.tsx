import styled from 'styled-components';

export const ChatContainer = styled.div`
    display: flex;
    flex: 1;
    position: fixed;
    bottom: 50px;
    right: 10px;
    
`;

export const ChatBubble = styled.div``;

export const Chatbox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 400px;
    background-color: white;
    height: 80vh;
    border: 1px solid #ececec;

`;

export const ChatHeader = styled.div`
    width: 100%;
`;

export const ChatInput = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
`;

export const PoweredBy = styled.div`
    display: flex;
    width: 100%;
    font-size: 8px;
`;

export const ChatHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    overflow: scroll;
    padding: 16px;
`;

export const Message = styled.div`
    display: flex;
    max-width: calc(100% - 64px);
    margin: 10px;
    flex-direction: row;
    
    
    ${({outgoing}: any) =>{
        switch(true) {
            case outgoing == true:
                return `
                    align-self: flex-start;
                `

            case outgoing == false:
                return `
                    align-self: flex-end;
                `

            default:
                return `
                    align-self: flex-start;
                `
        }
    }}
`;

export const MessageBody = styled.div`
    display: flex;
    padding: 8px 12px;
    border-radius: 8px;


    ${({outgoing}: any) =>{
        switch(true) {
            case outgoing == true:
                return `
                    background-color: #f5f8fa;
                `

            case outgoing == false:
                return `
                    background-color: #191034;
                    color: white;
                `

            default:
                return `
                    background-color: #f5f8fa;
                `
        }
    }}
`;

export const MessageInfo = styled.div`
    display: flex;
    font-size: 8px;
    margin-top: 5px;
    margin-left: 10px;
`;

export const MessageAvatar = styled.div`
    display: flex;
    margin-right: 10px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
`;

