import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import Footer from '../Components/Footer.js';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-blue-200 to-[#B0E0E6]`,
  div: `max-w-[700px] mx-auto my-16 p-4`,
  h1: `text-2xl font-bold py-2`,
  emailPassword: `py-2 font-medium`,
  buttonEnabled: `border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white`,
  buttonDisabled: `border border-grey-200 bg-grey-300 hover:bg-grey-500 w-full p-4 my-2 text-blue`,
};

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/homepage');
    } catch (e) {
      alert('User already exists');
    }
  };

  return (
    <>
      <div className={style.bg}>
        <div className={style.div}>
          <div>
            <h1 className={style.h1}>Sign up for a free account</h1>
            <p className='py-2'>
              Already have an account yet?{' '}
              <Link to='/' className='underline'>
                Sign in.
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col py-2'>
              <label className={style.emailPassword}>Email Address</label>
              <input
                onChange={e => setEmail(e.target.value)}
                className='border p-3'
                type='email'
              />
            </div>
            <div className='flex flex-col py-2'>
              <label className={style.emailPassword}>Password</label>
              <input
                onChange={e => setPassword(e.target.value)}
                className='border p-3'
                type='password'
              />
            </div>
            <button
              className={
                password.length < 7 || email.length < 5
                  ? style.buttonDisabled
                  : style.buttonEnabled
              }
              disabled={password.length < 7 || email.length < 5}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
