import React from 'react';
// import { IoPerson } from 'react-icons/io5';
// import { FaStar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// todo:
// 로그인 기능 구현 후 로직 생성 및 수정 필요
// 1. 로그인 계정 표시
// 2. '/roaster'에 접근 허용
// 3. admin 계정의 경우, 선수 등록 가능
export default function Navbar() {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();
  // const isLoggedIn = !!token
  return (
    <nav className='flex gap-5 font-medium'>
      <button
        className='flex gap-1 items-center'
        onClick={() => navigate('/players')}
      >
        <p>Players</p>
      </button>
      {/* token? navigate('/roster') : login */}
      <button
        className='flex gap-1 items-center'
        onClick={() => navigate('/roster')}
      >
        <p>Roster</p>
      </button>

      {isSignedIn || <Link to='/signin'>Sign In</Link>}
    </nav>
  );
}
