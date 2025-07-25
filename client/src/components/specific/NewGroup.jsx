import {
  Dialog,
  DialogTitle,
  Stack,
  Typography,
  ListItem,
  Avatar,
  Button,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { sampleUsers } from '../../constants/SampleData';
import UserItem from '../shared/UserItem';
import { useInputValidation } from '6pp';

const NewGroup = () => {

  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const closeHandler = () => {  }

 const selectMemberHandler = (user) => {
  setSelectedMembers((prev) => {
    const isAlreadySelected = prev.some((member) => member._id === user._id);

    if (isAlreadySelected) {
      // remove user
      return prev.filter((member) => member._id !== user._id);
    } else {
      // add user
      return [...prev, user];
    }
  });
};

  console.log(selectedMembers)

  const submitHandler = () => {
    // Add group logic here
  }

  const groupName = useInputValidation("");

  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={{ xs: '1rem', sm: '2rem' }} width={'25rem'}>
        <DialogTitle>New Group</DialogTitle>
        <TextField label="Group Name"  value={groupName.value} onChange={groupName.changeHandler}/>

        <Typography>Members</Typography>
        <Stack>
          {  
               members.map((user) => (
                 <UserItem
                   user={user}
                   key={user._id ?? user.id}
                   handler={selectMemberHandler}
                   isAdded={selectedMembers.includes(user._id)}
                 />
               ))
            }
        </Stack>

        <Stack direction={{
          xs: 'column',
          sm: 'row',
        }} sx={{
          mt: '1rem',
          gap: '0.5rem',
          alignSelf: 'center',
          justifyContent: 'space-evenly',

        }}>
          <Button variant='contained' onClick={submitHandler}>Create Group</Button>
          <Button variant='text' color="error">Cancel</Button>
        </Stack>

      </Stack>
    </Dialog>
  )
}

export default NewGroup