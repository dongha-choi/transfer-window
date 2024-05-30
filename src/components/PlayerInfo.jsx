import React from 'react';
import { useLocation } from 'react-router-dom';
import Scout from './Scout';

export default function PlayerInfo() {
  const { state } = useLocation();
  const { name, team, marketValue, role, profileUrl } = state.player;
  return (
    <div className='w-96 sm:w-128 mt-8 m-auto font-bold'>
      <div className='w-full pt-8 pb-12 flex flex-col sm:flex-row justify-center items-center rounded-3xl gradient-dark-blue'>
        <div className='w-3/5 ml-4 mb-4 flex flex-col items-center'>
          <img
            className='w-64 h-full mb-4 object-contain'
            src={profileUrl}
            alt='profile'
          />
          <p className='text-4xl gradient-gold'>{name}</p>
        </div>
        <ul className='w-2/5 mt-1 flex flex-col gap-8 font-bold text-xl'>
          <li>
            <p>⋆ Role </p>
            <div className='mt-2 flex items-center gap-2 '>
              <img
                className='w-8 ml-2 h-auto'
                src={`${process.env.PUBLIC_URL}/images/lane_logo/${role}_icon.webp`}
                alt='team_logo'
              />
              <p className='text-gold'>{role}</p>
            </div>
          </li>

          <li>
            <p>⋆ Team </p>
            <div className='w-full mt-2 flex items-center gap-2'>
              <img
                className='max-h-3 ml-4'
                src={`${process.env.PUBLIC_URL}/images/team/${team
                  .split(' ')
                  .join('')}.svg`}
                alt='team_logo'
              />
              <p>{team}</p>
            </div>
          </li>

          <li>
            <p>⋆ Market Value:</p>
            <p className='mt-2 ml-5 gradient-blue w-auto inline-block'>
              {marketValue}
            </p>
          </li>
        </ul>
      </div>
      <Scout name={name} />
    </div>
  );
}

<div className='mt-8 w-full font-bold flex flex-col items-center'>
  <div className='w-2/3'>
    <section className='w-full flex justify-center text-2xl gap-12'></section>
    <Scout />
  </div>
</div>;
