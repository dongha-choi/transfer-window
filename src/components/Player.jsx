import React from 'react';

export default function Player({ player }) {
  const { name, team, marketValue, role, profileUrl } = player;

  return (
    <li
      className={
        'w-full max-w-64 rounded-3xl pb-5 bg-blue cursor-pointer transition duration-300 ease border-2 border-transparent hover:border-lightGold'
      }
    >
      <div className='flex justify-end h-56 p-2 mb-1'>
        <img
          className='w-full h-full object-contain'
          src={profileUrl}
          alt='profile'
        />
      </div>
      <div className='flex flex-col items-center font-bold'>
        <p className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-lightGold to-darkGold'>
          {name}
        </p>
        <div className='flex items-center gap-1'>
          <img
            className='w-4 h-auto'
            src={`${process.env.PUBLIC_URL}/images/lane_logo/${role}_icon.webp`}
            alt='team_logo'
          />
          <p className='text-gold'>{role}</p>
        </div>
        <div className='w-full mt-2 flex justify-center items-center gap-2'>
          <img
            className='max-h-3'
            src={`${process.env.PUBLIC_URL}/images/team/${team
              .split(' ')
              .join('')}.svg`}
            alt='team_logo'
          />
          <p>{team}</p>
        </div>
        <p className='text-lg'>{marketValue}</p>
      </div>
    </li>
  );
}
