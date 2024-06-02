import React, { useState, useEffect } from 'react';
import { useDatabase } from '../context/DatabaseContext';
import MyPlayer from '../components/MyPlayer';

export default function Roster() {
  const { getRosterData, getScoutData } = useDatabase();
  const [rosterData, setRosterData] = useState(null);
  const [scoutData, setScoutData] = useState(null);
  const [error, setError] = useState('');

  const mapJson = (json, type) =>
    Object.entries(json).map(([key, item]) => (
      <MyPlayer
        key={key}
        player={item.player}
        proposal={item.proposal}
        type={type}
      />
    ));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const roster = await getRosterData();
        const scout = await getScoutData();
        if (roster) setRosterData(roster);
        if (scout) setScoutData(scout);
        console.log(roster);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [getRosterData, getScoutData]);

  return (
    <div className='w-full mt-4 m-auto text-xl font-normal'>
      <div className='w-full'>
        <span className='text-3xl font-bold gradient-blue'>⋆ My Roster</span>
        {rosterData ? (
          <ul className='w-full mt-2 mb-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4'>
            {mapJson(rosterData, 'roster')}
          </ul>
        ) : (
          <p>Add players to your roster!</p>
        )}
      </div>
      <div className='w-full mt-4'>
        <span className='text-3xl font-bold gradient-blue'>
          ⋆ Offered Scout
        </span>
        {scoutData ? (
          <ul className='w-full mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4'>
            {mapJson(scoutData, 'scout')}
          </ul>
        ) : (
          <p>Offer scout to players!</p>
        )}
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}
