import { Avatar, IconButton, ListItem, Typography, Stack } from '@mui/material';
import React, { memo } from 'react';
import {Add as AddIcon, Remove as RemoveIcon  } from '@mui/icons-material';

const UserItem = ({ user, handler, handleIsLoading , isAdded=false}) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        width="100%"
      >
        <Avatar src={Array.isArray(avatar) ? avatar[0] : avatar} />
        <Typography
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>
        <IconButton
          sx={{bgcolor: isAdded? 'error.main' : 'primary.main',
            color: 'white',
            cursor: handleIsLoading? 'not-allowed' : 'pointer',
            "&:hover": {bgcolor: isAdded ? 'error.dark' : 'primary.dark'},
            }  
          }
            
          onClick={() => handler(_id)} disabled={handleIsLoading}>
          {isAdded?  <RemoveIcon/>   : <AddIcon />   }
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem)