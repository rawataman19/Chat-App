import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import {Face as FaceIcon ,
   AlternateEmail as UserNameIcon,
   CalendarMonth as CalendarIcon,
   
  } from '@mui/icons-material'
  import moment from "moment"

const Profile = () => {
  return (
    <Stack 
    spacing={"2rem"} 
    direction={"column"} 
    alignItems={"center"} >
      <Avatar
        sx={{
          width: "6rem",
          height: "6rem",
          marginBottom: "1rem",
          border: "5px solid white",
          objectFit: "contain",
          
        }}

      />
      <ProfileCard heading={"bio"} text={"chal re noob"} />
      <ProfileCard heading={"mosit"} text={"rawataman481"} Icon={<UserNameIcon/>} />
      <ProfileCard heading={"Instagram"} text={"rawataman19"} Icon={<FaceIcon/>}/>
      <ProfileCard heading={"Joining Date"} text={moment('2024-07-22T07:56:49.605Z').fromNow()} Icon={<CalendarIcon/>}/>

    </Stack>
  )
}
const ProfileCard= ({text, Icon,heading}) => (
  <Stack direction={"row"} textAlign={"center"} alginItems={"center"} spacing={2} sx={{width: "100%", padding: "1rem", borderRadius: "8px" ,color: "white"}}>
      {Icon && Icon}
      <Stack>
        <Typography variant='body1' textAlign={"center"}>{text}</Typography>
        <Typography variant='caption' color="gray">{heading}</Typography>
      </Stack>
  </Stack>
)


export default Profile