import {
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  ListItem,
  Avatar,
  Button,
} from '@mui/material';
import React, { memo } from 'react';

import { sampleNotifications } from '../../constants/SampleData';

const Notifications = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log('ID:', _id, 'Accepted:', accept);
    // Add your friend request logic here
  };

  return (
    <Dialog open>
      <Stack p={{ xs: '1rem', sm: '2rem' }} maxWidth={'25rem'}>
        <DialogTitle>Notification</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map(({sender, _id}) => (
            <NotificationItem
              sender={sender}
              _id={_id}
              handler={friendRequestHandler}
              key={_id}
            />
          ))
        ) : (
          <Typography textAlign={'center'}>No Notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;

  return (
    <ListItem>
      <Stack direction="row" alignItems="center" spacing={1} width="100%">
        <Avatar src={avatar} alt={name} />
        <Typography
          sx={{
            flexGrow: 1,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {`${name} has sent you a friend request. Do you want to accept?`}
        </Typography>
        <Stack  direction={{
          xs:"column",
          sm:"row"
        }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>Reject</Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications;
