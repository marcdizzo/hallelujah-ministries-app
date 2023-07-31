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
import { useLoginMutation } from 'services/appApi';
import { Alert } from '@mui/material';
import TextField from '@mui/material/TextField';

const SignIn = () => {
  const user = useSelector((state) => state.user);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const [login, {isError,isLoading,error}] = useLoginMutation();

  const handleLogin = (e) => {
      e.preventDefault();
      login({email, password})
      if(email !== "" && password !== "" && !isError){
        navigate("/");
      }
  }
  return (
    <>
        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
        <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal text-center">
        Enter your details to login.
      </Typography>
      <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        {isError && <Alert variant='danger'>{error.data}</Alert>}
        <div className="mb-4 flex flex-col gap-6">
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="small"
        />
        <TextField 
          label="Password"
          size='small'
          type='password'
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
                  &nbsp;Remember me 
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button type='submit' disabled={isLoading} className="mt-6" fullWidth>
          Login 
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>    
    </div>
    
    </>
  )
}

export default SignIn