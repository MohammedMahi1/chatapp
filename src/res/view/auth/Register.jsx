import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';

const Register = () => {


    return (
        <Box className="register-contente">
            <Typography variant='h5' color='secondary'>Register</Typography>
            <TextField id="standard-basic" label="Entre your full name"  variant="standard" required type='text' sx={{ width: 350 }} color='secondary' />
            <TextField id="standard-basic" label="Entre your email" variant="standard" required type='email' sx={{ width: 350 }} color='secondary' />
            <TextField id="standard-basic" label="Entre your username" variant="standard" required type='text' sx={{ width: 350 }} color='secondary' />
            <TextField id="standard-basic" label="Entre your password" variant="standard" required type='password' sx={{ width: 350 }} color='secondary' />
            <TextField id="standard-basic" label="Confirme your password" variant="standard" required type='password' sx={{ width: 350 }} color='secondary' />
            <Button color='purper' type='submit' variant='contained' sx={{ width: 350 }}>Sing up</Button>
            <Typography variant='h6' fontSize={15} marginTop={5} color='secondary'>Swipe there for authenticate with Qr Code <SwipeLeftIcon fontSize='small' /> </Typography>
        </Box>
    )
}

export default Register