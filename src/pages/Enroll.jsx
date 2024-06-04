import React, { useState } from 'react';
import { useImmer } from 'use-immer';
import { v4 as uuidv4 } from 'uuid';
import { useDatabase } from '../context/DatabaseContext';
import { useNavigate } from 'react-router-dom';

export default function Enroll() {
  const { enrollPlayer } = useDatabase();
  const [player, updatePlayer] = useImmer({
    id: uuidv4(),
    name: '',
    team: '',
    role: '',
    marketValue: '',
    profile: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (const key in player) {
      if (typeof player[key] === 'string' && !player[key].trim()) {
        console.log(`${key} is empty!`);
        return;
      }
    }
    try {
      setError('');
      setLoading(true);

      await enrollPlayer(player);

      alert(`${player.name} is successfully enrolled!`);
      navigate('/players');
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // updatePlayer((draft) => {
    //   draft.profile = JSON.stringify(selectedFile);
    // });
    // setPreviewUrl(URL.createObjectURL(selectedFile));
    updatePlayer((draft) => {
      draft.profile = URL.createObjectURL(selectedFile);
    });
  };
  return (
    <div className='w-full mt-8 flex flex-col items-center text-lg font-bold'>
      <div className='w-5/6 max-w-96 '>
        <p className='p-1 my-4 text-2xl gradient-gold'>
          Tell us about the FA player.
        </p>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-start gap-4'
        >
          <div className='w-full'>
            <p>&nbsp;⋆&nbsp;&nbsp;What is the name of the player?</p>
            <div className='flex items-center'>
              <span className='text-sm mr-1 pt-1'>→</span>
              <input
                type='name'
                value={player.name}
                onChange={(e) =>
                  updatePlayer((draft) => {
                    draft.name = e.target.value;
                  })
                }
                className='w-4/5 ml-1 mt-1'
                required
              />
            </div>
          </div>
          <div className='w-full'>
            <p>&nbsp;⋆&nbsp;&nbsp;What is the player's most recent team?</p>
            <div className='flex items-center'>
              <span className='text-sm mr-1 pt-1'>→</span>
              <select
                name='team'
                value={player.team}
                onChange={(e) => {
                  updatePlayer((draft) => {
                    draft.team = e.target.value;
                  });

                  console.log(player);
                }}
                className='ml-1'
                required
              >
                <option value='' disabled selected>
                  Select a team
                </option>
                <option value='Dplus KIA'>Dplus KIA</option>
                <option value='Gen.G'>Gen.G</option>
                <option value='T1'>T1</option>
                <option value='KT'>KT</option>
                <option value='HLE'>HLE</option>
                <option value='KDF'>KDF</option>
                <option value='NS'>NS</option>
                <option value='DRX'>DRX</option>
                <option value='FOX'>FOX</option>
                <option value='BRO'>BRO</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <p>&nbsp;⋆&nbsp;&nbsp;What is the player's role?</p>
            <div className='flex items-center'>
              <span className='text-sm mr-1 pt-1'>→</span>
              <select
                name='role'
                value={player.role}
                onChange={(e) => {
                  updatePlayer((draft) => {
                    draft.role = e.target.value;
                  });

                  console.log(player);
                }}
                className='ml-1'
                required
              >
                <option value='' disabled selected>
                  Select a position
                </option>
                <option value='Top'>Top</option>
                <option value='Jungle'>Jungle</option>
                <option value='Mid'>Mid</option>
                <option value='Bot'>Bot</option>
                <option value='Support'>Support</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <p>
              &nbsp;⋆&nbsp;&nbsp;How much is the player valued in the market?
            </p>
            <div className='flex items-center'>
              <span className='text-sm mr-1 pt-1'>→</span>
              <span className='mt-1'>&#36;</span>
              <input
                type='text'
                value={player.marketValue}
                onChange={(e) =>
                  updatePlayer((draft) => {
                    draft.marketValue = e.target.value;
                  })
                }
                className='w-4/5 mt-1'
                required
              />
            </div>
          </div>
          <div className='w-full'>
            <p>&nbsp;⋆&nbsp;&nbsp;Please attach the profile of the player.</p>
            <div className='flex items-center'>
              <input type='file' onChange={handleFileChange} required />
            </div>
            {player.profile && (
              <img
                src={player.profile}
                alt='Profile Preview'
                className='w-auto h-28'
              />
            )}
          </div>
          <button
            disabled={loading}
            className='w-11/12 mt-2 py-2 border border-skyBlue rounded-md text-xl text-center'
            type='submit'
          >
            Enroll
          </button>
        </form>
        {error && <p className='text-skyBlue text-sm font-medium'>{error}</p>}
      </div>
    </div>
  );
}
