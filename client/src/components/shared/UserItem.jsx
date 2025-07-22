import { Avatar, IconButton, ListItem, Typography, Stack } from '@mui/material';
import React, { memo } from 'react';
import AddIcon from '@mui/icons-material/Add';

const UserItem = ({ user, handler, handleIsLoading }) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        width="100%"
      >
        <Avatar src={avatar} />
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
        <IconButton onClick={() => handler(_id)} disabled={handleIsLoading}>
          <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default memo(UserItem)