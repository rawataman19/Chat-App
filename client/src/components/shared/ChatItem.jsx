import React, { memo } from 'react';
import { Link } from '../styles/StyledComponents';
import { Stack, Typography, Box } from '@mui/material';
import AvatarCard from './AvatarCard';

const ChatItem = ({
    name,
    avatar,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    handleDeleteChatOpen,

}) => {
  return  <Link 
        sx={{padding: "1rem"}}
  
  
        to={`/chat/${_id}`} onContextMenu={(e) => {handleDeleteChatOpen(e, _id,groupChat)}} >
    
    
    <div style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: sameSender ? "black" : "white", 
        color: sameSender ? "white" : "unset",
        gap: "1rem",
        position: "relative",
        }}>
        <AvatarCard avatar={avatar}></AvatarCard>
        <Stack>
            <Typography
                sx={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: sameSender ? "black" : "gray",
                }}
            >{name}</Typography>
            {newMessageAlert && (
                <Typography>
                    {newMessageAlert.count} New Messages
                </Typography>
            )}
        </Stack>
        {isOnline && (
            <Box sx={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "green",
                position: "absolute",
                top: "10px",
                right: "10px",
                transform: "translateY(-50%)"
            }} />
        )}
    </div>
  </Link>
}

export default memo(ChatItem)