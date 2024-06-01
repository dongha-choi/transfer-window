import React from 'react';
import Player from './Player';

export default function MyPlayer({ player, proposal }) {
  return (
    <div>
      <Player player={player} type='list' />
      <p>Proposal: {proposal}</p>
    </div>
  );
}
