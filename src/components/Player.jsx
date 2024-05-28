import React from 'react';

export default function Player({ player }) {
  const { name, team, marketValue, role, profileUrl, teamLogoUrl } = player;

  return (
    <li className='w-full max-w-64 rounded-3xl pb-5 bg-blue cursor-pointer'>
      <div className='flex justify-end h-56 p-2 mb-1'>
        <img
          className='w-full h-full object-contain'
          src={profileUrl}
          alt='profile'
        />
      </div>
      <div className=' flex flex-col items-center gap-3 font-bold'>
        <p className='text-2xl my-2  text-transparent bg-clip-text bg-gradient-to-r from-lightGold to-darkGold'>
          {name}
        </p>
        <div className='flex items-center gap-1'>
          <img
            className='w-5 h-auto'
            src={`${process.env.PUBLIC_URL}/images/lane_logo/${role}_icon.webp`}
            alt='team_logo'
          />
          <p className='text-gold'>{role}</p>
        </div>
        <div className='flex items-center gap-2'>
          <div className='flex justify-center items-center w-7 h-7 rounded-lg bg-white'>
            <img className='w-5 h-auto' src={teamLogoUrl} alt='team_logo' />
          </div>
          <p>{team}</p>
        </div>
        <p className='text-lg'>{marketValue}</p>
      </div>
    </li>
  );
}
