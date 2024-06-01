import React from 'react';
import PlayerInfo from './PlayerInfo';

export default function MyPlayer({ player, proposal }) {
  return (
    <div className='w-96'>
      <PlayerInfo player={player} type='list' />
      <div className='w-full p-4 bg-darkGray rounded-b-3xl'>
        <p className=' text-brand'>Proposal:</p>
        <p>{proposal}</p>
      </div>
    </div>
  );
}
