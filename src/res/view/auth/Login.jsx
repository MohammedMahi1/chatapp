import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
const Login = () => {
  return (
    <>
      <Typography variant='h5' color='secondary'>Login</Typography>
      <TextField id="standard-basic" label="Username" variant="standard" type='text' sx={{ width: 350 }} color='secondary' />
      <TextField id="standard-basic" label="Password" variant="standard" type='password' sx={{ width: 350 }} color='secondary' />
      <Button color='purper' variant='contained' sx={{ width: 350 }}>Sing up</Button>
      <Typography variant='h6' fontSize={15} marginTop={15} color='secondary'>Swipe there for create new account <SwipeLeftIcon fontSize='small' /> </Typography>
    </>
  )
}

export default Login