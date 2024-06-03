import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useDatabase } from '../context/DatabaseContext';

export default function Navbar() {
  const { isSignedIn, exit } = useAuth();
  const { getUserInfo } = useDatabase();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    if (isSignedIn) {
      const fetchData = async () => {
        try {
          const userInfo = await getUserInfo();
          setUserInfo(userInfo);
          console.log('fetched user Info: ', userInfo);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }
  }, [isSignedIn, getUserInfo]);
  return (
    <nav className='flex items-center gap-2 font-medium'>
      <Link to='/players' className='px-2 py-1'>
        Players
      </Link>
      <Link to='/roster' className='px-2 py-1'>
        Roster
      </Link>
      {isSignedIn ? (
        <>
          <span className='px-2 py-1 font-bold text-gold'>{userInfo.name}</span>
          <Link to='/' className='px-2 py-1' onClick={exit}>
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <Link to='/signin' className='px-2 py-1'>
            Sign In
          </Link>
          <Link
            to='/signup'
            className='px-2 py-1 border rounded-md border-lightGold'
          >
            Sign Up
          </Link>
        </>
      )}
    </nav>
  );
}
