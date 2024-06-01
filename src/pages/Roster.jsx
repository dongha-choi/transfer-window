import React, { useState, useEffect } from 'react';
import { useDatabase } from '../context/DatabaseContext';
import MyPlayer from '../components/MyPlayer';

export default function Roster() {
  const { getRosterData, getScoutData } = useDatabase();
  const [rosterData, setRosterData] = useState(null);
  const [scoutData, setScoutData] = useState(null);
  const [error, setError] = useState('');

  const mapJson = (json) =>
    Object.entries(json).map(([key, item]) => (
      <MyPlayer key={key} player={item.player} proposal={item.proposal} />
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
    <div className='w-11/12 mt-4 m-auto text-xl font-normal'>
      <span className='text-3xl font-bold gradient-blue'>My Roster</span>
      {rosterData ? mapJson(rosterData) : <p>Add players to your roster!</p>}
      <span className='text-2xl font-bold gradient-blue'>Scout Offer</span>
      {scoutData ? mapJson(scoutData) : <p>Offer scout to players!</p>}
      {error && <p>{error}</p>}
    </div>
  );
}
