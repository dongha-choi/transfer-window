import React from 'react';
import { SiRiotgames } from 'react-icons/si';
// import { IoPerson } from 'react-icons/io5';
// import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// todo:
// 로그인 기능 구현 후 로직 생성 및 수정 필요
// 1. 로그인 계정 표시
// 2. '/roaster'에 접근 허용
// 3. admin 계정의 경우, 선수 등록 가능
export default function Navbar() {
  const navigate = useNavigate();
  // const isLoggedIn = !!token
  return (
    <header className='w-full p-2 flex justify-between items-center'>
      <section
        className='pt-2 flex gap-1 items-center cursor-pointer'
        onClick={() => navigate('/')}
      >
        <SiRiotgames className='text-2xl text-white' />
        <p className='text-2xl font-bold'>Riot Games</p>
      </section>
      <section className='flex gap-5 font-medium'>
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
        <button>Login</button>
      </section>
    </header>
  );
}
