import React from 'react';
import { useDatabase } from '../context/DatabaseContext';

export default function PlayerInfo({ player, isMyPlayer, type }) {
  const { id, name, team, marketValue, role, profileUrl } = player;
  const { deletePlayer } = useDatabase();
  const onDelete = () => {
    if (window.confirm(`Are you sure you want to release ${name}?`)) {
      deletePlayer(id, type);
    }
  };
  return (
    <div
      className={
        'relative w-full h-96 flex justify-center items-center gradient-dark-blue' +
        (isMyPlayer
          ? ' py-4 gap-2 flex-row rounded-t-3xl'
          : ' pt-4 pb-4 gap-4 flex-col sm:flex-row rounded-3xl')
      }
    >
      {isMyPlayer && (
        <button
          className='absolute top-2 right-2 p-2 w-6 h-6 leading-6 flex justify-center items-center gradient-gold font-normal'
          onClick={onDelete}
        >
          ✖
        </button>
      )}
      <div className='w-56 mb-4 flex flex-col items-center'>
        <img
          className='w-56 h-full mb-4 object-contain'
          src={profileUrl}
          alt='profile'
        />
        <p className='text-4xl gradient-gold'>{name}</p>
      </div>
      <ul className='w-40 sm:w-40 flex flex-col gap-4 sm:gap-8 font-bold text-xl'>
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
  );
}
