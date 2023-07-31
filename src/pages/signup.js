import React, { useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSignupMutation } from 'services/appApi';
import { Alert } from 'react-bootstrap';
import TextField from "@mui/material/TextField";

const SignUp = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [signup,{error, isLoading,isError}] = useSignupMutation();



    const handleSignup = (e) => {
        e.preventDefault();
        signup({name,email,password})
        if(name !== "" && email !== "" && password !== ""){
            navigate('/');
        }
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center my-5'>
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-center">
        Enter your details to register.
      </Typography>
      <form onSubmit={handleSignup} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        {/* {isError && <Alert variant='danger'>{error.data}</Alert>} */}
        <div className="mb-4 flex flex-col gap-6">
          <TextField 
          id='outlined-basic' size='small' defaultValue="Small" label="Name" variant='outlined' 
          value={name} onChange={(e) => setName(e.target.value)}
          />
          <TextField 
          id='outlined-basic' size='small' defaultValue="Small" label="Email" variant='outlined' 
          value={email} onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
          id='outlined-basic' type='password' size='small' defaultValue="Small" label="Password" variant='outlined' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Checkbox
          label={
            (
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" type='submit' disabled={isLoading} fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>    
    </div>
  )
}

export default SignUp