import React from 'react';
import { SiRiotgames } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className='mt-2 w-full p-2 flex justify-between items-center'>
      <section
        className='flex gap-1 items-center cursor-pointer'
        onClick={() => navigate('/')}
      >
        <SiRiotgames className='text-2xl text-white' />
        <p className='text-2xl font-bold'>Riot Games</p>
      </section>
      <Navbar />
    </header>
  );
}
