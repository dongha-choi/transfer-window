import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useDatabase } from '../context/DatabaseContext';

export default function Proposal({ player }) {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const [proposal, setProposal] = useState('');
  const { addToRoster, addToScout } = useDatabase();
  const [error, setError] = useState('');
  const submit = async (action) => {
    if (!isSignedIn) {
      navigate('/signin');
      return;
    }
    if (proposal.trim().length === 0) {
      alert('Write a proposal!');
      return;
    }
    try {
      setError('');
      if (action === 'roster') {
        await addToRoster(player.id, { player, proposal });
        alert(`${player.name} joined to your roster!`);
      } else if (action === 'scout') {
        await addToScout(player.id, { player, proposal });
        alert(`Your proposal was successfully sent to ${player.name}!`);
      }
      setProposal('');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
  //     e.preventDefault();
  //   }
  // };
  return (
    <div className='w-96 sm:w-128 mt-4 text-xl flex flex-col items-start gap-2'>
      <label htmlFor='proposal'>Write a proposal to scout {player.name}:</label>
      <textarea
        name='proposal'
        value={proposal}
        onChange={(e) => setProposal(e.target.value)}
        // onKeyDown={handleKeyDown}
        placeholder='Your proposal here...'
        className='w-full min-h-12 appearance-none text-white bg-gray rounded-xl'
        rows='5'
      />
      <div className='w-full mt-1 flex gap-2'>
        <button
          className='flex-1 rounded-xl pt-2 pb-3 bg-blue border border-gold-transition'
          onClick={() => submit('roster')}
        >
          Add to Roster
        </button>
        <button
          className='flex-1 rounded-xl pt-2 pb-3 bg-blue border border-gold-transition'
          onClick={() => submit('scout')}
        >
          Scout Now
        </button>
      </div>
      {error && <p className='text-skyBlue text-sm font-medium'>{error}</p>}
    </div>
  );
}
