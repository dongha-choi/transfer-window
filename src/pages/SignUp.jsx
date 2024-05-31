import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useImmer } from 'use-immer';

export default function SignUp() {
  const [user, updateUser] = useImmer({
    email: '',
    password: '',
    // name: '', // can't send name.
  });
  const [confirmationPassword, setConfirmationPassword] = useState('');
  const confirm = (a, b) => {
    if (!a || !b || a === b) {
      return true;
    }
    return false;
  };
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const key in user) {
      if (!user[key].trim()) {
        console.log(`${key} is empty!`);
        return;
      }
    }
    if (!confirm(user.password, confirmationPassword)) return;
    try {
      setError('');
      setLoading(true);
      await signUp(user.email, user.password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='w-full mt-8 flex flex-col items-center text-lg font-bold'>
      <div className='w-5/6 max-w-96 '>
        <p className='p-1 my-4 text-2xl gradient-gold'>
          Join us and make your own roster!
        </p>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-start gap-4'
        >
          <div className='w-full'>
            <p>&nbsp;⋆&nbsp;&nbsp;Enter your email</p>
            <div className='flex items-center'>
              <span className='text-sm mr-1 pt-1'>→</span>
              <input
                type='email'
                value={user.email}
                onChange={(e) =>
                  updateUser((draft) => {
                    draft.email = e.target.value;
                  })
                }
                className='w-4/5 ml-1 mt-1'
                required
              />
            </div>
          </div>
          <div className='w-full'>
            <p>&nbsp;⋆&nbsp;&nbsp;Create a password</p>
            <div className='flex items-center'>
              <span className='text-sm mr-1 pt-1'>→</span>
              <input
                type='password'
                value={user.password}
                onChange={(e) =>
                  updateUser((draft) => {
                    draft.password = e.target.value;
                  })
                }
                className='w-4/5 ml-1 mt-1 font-normal'
                required
              />
            </div>
          </div>
          <div className='w-full'>
            <p>&nbsp;⋆&nbsp;&nbsp;Confirm the password</p>
            <div className='flex items-center'>
              <span className='text-sm mr-1 pt-1'>→</span>
              <input
                type='password'
                value={confirmationPassword}
                onChange={(e) => setConfirmationPassword(e.target.value)}
                className='w-4/5 ml-1 mt-1 font-normal'
                required
              />
            </div>
            {confirm(user.password, confirmationPassword) || (
              <p className='ml-6 mt-1 text-skyBlue text-sm font-medium'>
                Check the password.
              </p>
            )}
          </div>
          {/* <div className='w-full'>
            <p>&nbsp;⋆&nbsp;&nbsp;Create your roster name</p>
            <div className='flex items-center'>
              <span className='text-sm mr-1 pt-1'>→</span>
              <input
                type='name'
                value={user.name}
                onChange={(e) =>
                  updateUser((draft) => {
                    draft.name = e.target.value;
                  })
                }
                className='w-4/5 ml-1 mt-1'
                required
              />
            </div>
          </div> */}
          <button
            disabled={loading}
            className='w-11/12 mt-2 py-2 border border-skyBlue rounded-md text-xl text-center'
            type='submit'
          >
            Join
          </button>
        </form>
        {error && <p className='text-skyBlue text-sm font-medium'>{error}</p>}
      </div>
    </div>
  );
}
