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
    <nav className='flex items-center gap-6 font-medium'>
      {userInfo.position === 'agent' && (
        <Link
          to='/enroll'
          className='px-2 py-1 border rounded-md border-skyBlue'
        >
          Enroll FA
        </Link>
      )}
      <Link to='/players' className='py-1'>
        Players
      </Link>
      <Link to='/roster' className='py-1'>
        {isSignedIn ? (
          <span className='py-1 font-bold text-gold'>{userInfo.name}</span>
        ) : (
          <span className='py-1'>Roster</span>
        )}
      </Link>

      {isSignedIn ? (
        <>
          <Link
            to='/'
            className='py-1'
            onClick={async () => {
              await exit();
              setUserInfo({});
            }}
          >
            Sign Out
          </Link>
        </>
      ) : (
        <>
          <Link to='/signin' className='py-1'>
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
