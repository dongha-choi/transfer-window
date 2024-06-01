import React from 'react';
import { useLocation } from 'react-router-dom';
import Proposal from '../components/Proposal';
import PlayerInfo from '../components/PlayerInfo';

export default function Scout() {
  const { state } = useLocation();
  const player = state.player;
  return (
    <div className='w-96 sm:w-128 mt-4 m-auto font-bold'>
      <PlayerInfo player={player} />
      <Proposal player={player} />
    </div>
  );
}
