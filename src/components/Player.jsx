import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Player({ player }) {
  const { id, name, team, marketValue, role, profileUrl } = player;
  const navigate = useNavigate();
  return (
    <li
      className='w-full max-w-64 rounded-3xl pb-5 gradient-dark-blue cursor-pointer border-2 border-gold-transition'
      onClick={() => navigate(`/players/${id}`, { state: { player } })}
    >
      <div className='flex justify-end h-56 p-2 mb-1'>
        <img
          className='w-full h-full object-contain'
          src={profileUrl}
          alt='profile'
        />
      </div>
      <div className='flex flex-col items-center font-bold'>
        <p className='text-2xl gradient-gold'>{name}</p>
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
        <p className='text-lg gradient-blue w-auto inline-block'>
          {marketValue}
        </p>
      </div>
    </li>
  );
}
