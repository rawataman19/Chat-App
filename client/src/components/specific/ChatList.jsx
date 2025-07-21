import React from 'react';
import { Stack } from '@mui/material';
import ChatItem from '../shared/ChatItem';

const ChatList = ({
    w="100%",
    chats=[],
    chatId, 
    onlineUsers=[],
    newMessagesAlert=[],
    handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
        {chats?.map((data,index)=>{
            const {_id, name, groupChat, avatar ,members} = data;

            const newMessageAlert = newMessagesAlert.find((alert) => alert.chatId === _id);
            const isOnline = members?.some((member) => onlineUsers.includes(member));
            return (
              <ChatItem
                key={_id}
                newMessageAlert={newMessageAlert}
                isOnline={isOnline}
                name={name}
                _id={_id}
                avatar={avatar}
                groupChat={groupChat}
                sameSender={chatId === _id}
                handleDeleteChatOpen={handleDeleteChat}
                index={index}
              />
            );
        })}

    </Stack>
  )
}
export default ChatList