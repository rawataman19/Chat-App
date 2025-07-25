
import { Container, Paper, TextField, Typography, Button, Stack, Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { CameraAlt as CameraAltIcon } from '@mui/icons-material';
import { useFileHandler, useInputValidation } from '6pp';
import { VisuallyHiddenInput } from '../components/styles/StyledComponents';
import { usernameValidator, userPasswordValidator } from '../utils/validators';

const Login = () => {
  const [isLogin,setIsLogin] =useState(true);

  const toggleLogin = () => {
    setIsLogin(prev => !prev);
  }
  const name = useInputValidation("");
  const username = useInputValidation("",usernameValidator);
  const bio = useInputValidation("");
  const password= useInputValidation("",userPasswordValidator);
  const handleLoginIn = (e) => {
    e.preventDefault();
  }
  const handleSignUp = (e) => {
    e.preventDefault();
  }

  const avatar=  useFileHandler("single");
  return (
    <div style={{backgroundImage:
      "linear-gradient(rgba(255, 255, 209, 0.5), rgba(249,159, 159, 0.5))",
    }}>
       <Container component={"main"} maxWidth="xs" sx={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>

    <Paper elevation={3} sx={
      {
        padding:4,
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
      }
    }>
      {

        isLogin ? 

          <>
            <Typography variant='h5'> Login</Typography>
            <form style={{width: "100%" , marginTop: "1rem"}}
            onSubmit={handleLoginIn}>
                <TextField 
                required 
                fullWidth 
                label="username" 
                margin='normal'
                value={username.value}
                onChange={username.changeHandler}
                variant='outlined'


                />
                {
                  username.error && <Typography color="error" 
                  variant="caption">{username.error}
                  </Typography>
                }
                <TextField
                required 
                fullWidth 
                label="Password" 
                type='password'
                value={password.value}
                onChange={password.changeHandler}
                margin='normal'
                variant='outlined'

                />
                {
                  password.error && <Typography color="error" 
                  variant="caption">{password.error}
                  </Typography>
                }

              <Button  sx={{marginTop : "1rem"}}  
              variant='contained' 
               color='secondary' 
               fullWidth   
               >Login </Button>
               
               <Typography textAlign={'center'} m={"1rem"}>OR</Typography>
              <Button  sx={{marginTop : "1rem"}}  
              variant='contained' 
               color='primary' 
               onClick={toggleLogin}
               fullWidth   
               >Sign Up Instead </Button>
            </form>
          </>
        
        
        
        
        
        
        :<>
            <Typography variant='h5'> Sign Up</Typography>
            <form style={{width: "100%" , marginTop: "1rem"}}
            
            onSubmit={handleSignUp}
            >
              <Stack position={'relative'} width={"10rem"} margin={"auto"} >
                <Avatar sx={{
                   width:"10rem" ,
                   height:"10rem" , 
                   objectFit: "contain"
                }} 
                  src={avatar.preview}
                />
                {
                  avatar.error && <Typography color="error" 
                  variant="caption"  m={"1rem"}>{avatar.error}
                  </Typography>
                }

                <IconButton sx={{
                   position: 'absolute',
                   bottom: 0, 
                   right: 0,
                   borderRadius: '50%',
                   color: 'white',
                   bgcolor: "rgba(0, 0, 255, 0.8)",
                   '&:hover': {bgcolor: "rgba(0, 0, 0, 0.7)"},
                 }} component="label">
                  <CameraAltIcon/> 
                  <VisuallyHiddenInput
                    type="file"
                    accept="image/*"
                    onChange={avatar.changeHandler}
                  />
                </IconButton> 
              </Stack> 
              <TextField 
                required 
                fullWidth 
                label="Name" 
                value={name.value}
                onChange={name.changeHandler}
                margin='normal'
                variant='outlined'
              />
              <TextField 
                required 
                fullWidth 
                label="username" 
                onChange={username.changeHandler}
                value={username.value}
                margin='normal'
                variant='outlined'
              />
               {
                  username.error && <Typography color="error" 
                  variant="caption">{username.error}
                  </Typography>
                }
              <TextField
                required 
                fullWidth 
                label="Password" 
                type='password'
                onChange={password.changeHandler}
                value={password.value}
                margin='normal'
                variant='outlined'
              />
              <TextField 
                required 
                fullWidth 
                label="Bio" 
                onChange={bio.changeHandler}
                value={bio.value}
                margin='normal'
                variant='outlined'
              />
              <Button  sx={{marginTop : "1rem"}}  
                variant='contained' 
                color='secondary' 
                fullWidth   
              >Sign Up </Button>
              <Typography textAlign={'center'} m={"1rem"}>OR</Typography>
              <Button  sx={{marginTop : "1rem"}}  
                variant='contained' 
                color='primary' 
                onClick={toggleLogin}
                fullWidth   
              >Login Instead </Button>
            </form>
          </>

      }

    </Paper>
    </Container>
    </div>
  )
}

export default Login