import React from 'react';
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';
import ChatList from '../specific/ChatList';
import { sampleChats } from '../../constants/SampleData';
import { useParams } from 'react-router-dom';
import Profile from '../specific/Profile';

const AppLayout = () => (WrappedComponent) => {
  return (props) => {

    const params= useParams();
    const chatId = params.chatId;
    const hanldeDeleteChat = (e, chatId, groupChat) => {
      e.preventDefault();
      // Logic to handle chat deletion
    };
    return (
      <>
        <Title />
        <Header />
        <Grid container height="calc(100vh - 4rem)">
          <Grid item  
            xs={4}
            md={3}
            height={'100%'}
          sx={{ width: '20rem', bgcolor: 'primary.main', display:{ xs: 'none', sm: 'block' } }}>
            <ChatList  chats={sampleChats}
            chatId={chatId}

        /> 
          </Grid>
          <Grid item xs={12} sm={8} lg={6} sx={{ flexGrow: 1, bgcolor: 'white' }}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid item   md={4} lg={3}  sx={{ width: '20rem', bgcolor: 'black',
           display:{ xs: 'none', sm: 'block' } ,
          padding: '2rem',

        }}>
            <Profile/>
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
