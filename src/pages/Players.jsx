import React, { useEffect, useState } from 'react';
import Player from '../components/Player';
import { v4 as uuidv4 } from 'uuid';
import { useDatabase } from '../context/DatabaseContext';
import { useStorage } from '../context/StorageContext';

export default function Players() {
  const { fetchPlayers } = useDatabase();
  const { fetchProfileUrls } = useStorage();
  const [playersList, setPlayersList] = useState([]);
  useEffect(() => {
    const makePlayersList = async () => {
      const players = await fetchPlayers();
      const profileUrls = await fetchProfileUrls();
      const list = players.map((player) => {
        for (const profileUrl of profileUrls) {
          if (player.id === profileUrl.id) {
            player.profileUrl = profileUrl.url;
            break;
          }
        }
        return player;
      });
      console.log(list);
      setPlayersList(list);
    };
    makePlayersList();
  }, [fetchPlayers, fetchProfileUrls]);
  return (
    <ul className='w-11/12 mt-8 m-auto grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-4'>
      {mockPlayers.map((player) => (
        <Player player={player} key={player.id} />
      ))}
      {playersList.map((player) => (
        <Player player={player} key={player.id} />
      ))}
    </ul>
  );
}

const mockPlayers = [
  {
    id: uuidv4(),
    name: 'Kingen',
    team: 'dk',
    role: 'Top',
    marketValue: '1000000',
    profileUrl: '/images/players/DK_Kingen_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Lucid',
    team: 'dk',
    role: 'Jungle',
    marketValue: '100000',
    profileUrl: '/images/players/DK_Lucid_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'ShowMaker',
    team: 'dk',
    role: 'Mid',
    marketValue: '2000000',
    profileUrl: '/images/players/DK_ShowMaker_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Aiming',
    team: 'dk',
    role: 'Bot',
    marketValue: '1200000',
    profileUrl: '/images/players/DK_Aiming_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Kellin',
    team: 'dk',
    role: 'Support',
    marketValue: '300000',
    profileUrl: '/images/players/DK_Kellin_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Kiin',
    team: 'gen',
    role: 'Top',
    marketValue: '1500000',
    profileUrl: '/images/players/GEN_Kiin_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Canyon',
    team: 'gen',
    role: 'Jungle',
    marketValue: '1800000',
    profileUrl: '/images/players/GEN_Canyon_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Chovy',
    team: 'gen',
    role: 'Mid',
    marketValue: '2500000',
    profileUrl: '/images/players/GEN_Chovy_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Viper',
    team: 'hle',
    role: 'Bot',
    marketValue: '3000000',
    profileUrl: '/images/players/HLE_Viper_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Faker',
    team: 't1',
    role: 'Mid',
    marketValue: '10000000',
    profileUrl: '/images/players/T1_Faker_2024_Split_1.webp',
  },
];
