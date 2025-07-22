import { Dialog, InputAdornment, List, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useInputValidation } from "6pp";
import SearchIcon from '@mui/icons-material/Search';
import UserItem from '../shared/UserItem';
import {  sampleUsers } from '../../constants/SampleData';



const Search = () => {

  const search = useInputValidation("");
  const addFriendHandler = (id)=>{
      console.log(id)
  }
  const [users,setUsers]= useState(sampleUsers);

  let isLoadingSendFriendRequest=false;

  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <Typography textAlign="center" variant="h6" mb={2}>Find People</Typography>
        <TextField
          // label="/"
          value={search.value}
          onChange={search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment:  (
              <InputAdornment position='start'>
                <SearchIcon/>
              </InputAdornment>
             
            ),
          }}
        />
        <List>
            {
              users.map((user) => (
                <UserItem
                  user={user}
                  key={user._id ?? user.id ?? user}
                  handler={addFriendHandler}
                  handleIsLoading={isLoadingSendFriendRequest}
                />
              ))
            }
        </List>
      </Stack>
    </Dialog>
  );
}

export default Search