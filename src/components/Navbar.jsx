import React from 'react';
// import { IoPerson } from 'react-icons/io5';
// import { FaStar } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

// todo:
// 로그인 기능 구현 후 로직 생성 및 수정 필요
// 1. 로그인 계정 표시
// 2. '/roaster'에 접근 허용
// 3. admin 계정의 경우, 선수 등록 가능
export default function Navbar() {
  //isAdmin
  const { isSignedIn } = useAuth();
  console.log(isSignedIn);
  return (
    <nav className='flex gap-2 font-medium'>
      <Link to='/players' className='px-2 py-1 flex items-center'>
        Players
      </Link>
      <Link to='/roster' className='px-2 py-1 flex items-center'>
        Roster
      </Link>
      {isSignedIn || (
        <Link to='/signin' className='px-2 py-1 flex items-center'>
          Sign In
        </Link>
      )}
      {isSignedIn || (
        <Link
          to='/signup'
          className='px-2 py-1 border rounded-md border-lightGold flex items-center'
        >
          Sign Up
        </Link>
      )}
    </nav>
  );
}
