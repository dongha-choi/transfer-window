import React from 'react';
import PlayerInfo from './PlayerInfo';

export default function MyPlayer({ player, proposal, type }) {
  return (
    <div className='w-100'>
      <PlayerInfo player={player} isMyPlayer={true} type={type} />
      <div className='w-full p-5 bg-darkGray rounded-b-3xl text-lg'>
        <p className='font-medium text-brand'>Proposal:</p>
        <p>{proposal}</p>
      </div>
    </div>
  );
}
