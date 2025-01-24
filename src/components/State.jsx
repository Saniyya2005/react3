import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var[val, setVal]=useState();
    var[data, setData]=useState();
    const inputHandler = (e) =>{
        console.log(e.target.value);
        setVal(e.target.value)
    };
    const submitHandler =() => {
        setData(val);
    }
  return (
    <div>
      <Typography variant='h3'>Hello {data}</Typography>
      <br/>
      <TextField onChange={inputHandler}
      variant="outlined" label='Enter your name'>Username
      </TextField>
      <br/><br/> 
      <Button variant="contained" onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default State