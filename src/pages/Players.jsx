import React from 'react';
import Player from '../components/Player';
import { v4 as uuidv4 } from 'uuid';

export default function Players() {
  return (
    <ul className='mt-8 m-auto grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-4'>
      {mockPlayers.map((player) => (
        <Player player={player} key={player.id} />
      ))}
    </ul>
  );
}

const mockPlayers = [
  {
    id: uuidv4(),
    name: 'Kingen',
    team: 'Dplus KIA',
    role: 'Top',
    marketValue: '$1,000,000',
    profileUrl: '/images/players/DK_Kingen_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Lucid',
    team: 'Dplus KIA',
    role: 'Jungle',
    marketValue: '$100,000',
    profileUrl: '/images/players/DK_Lucid_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'ShowMaker',
    team: 'Dplus KIA',
    role: 'Mid',
    marketValue: '$2,000,000',
    profileUrl: '/images/players/DK_ShowMaker_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Aiming',
    team: 'Dplus KIA',
    role: 'Bot',
    marketValue: '$1,200,000',
    profileUrl: '/images/players/DK_Aiming_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Kellin',
    team: 'Dplus KIA',
    role: 'Support',
    marketValue: '$300,000',
    profileUrl: '/images/players/DK_Kellin_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Kiin',
    team: 'Gen.G',
    role: 'Top',
    marketValue: '$1,500,000',
    profileUrl: '/images/players/GEN_Kiin_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Canyon',
    team: 'Gen.G',
    role: 'Jungle',
    marketValue: '$1,800,000',
    profileUrl: '/images/players/GEN_Canyon_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Chovy',
    team: 'Gen.G',
    role: 'Mid',
    marketValue: '$2,500,000',
    profileUrl: '/images/players/GEN_Chovy_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Viper',
    team: 'Hanwha Life Esports',
    role: 'Bot',
    marketValue: '$3,000,000',
    profileUrl: '/images/players/HLE_Viper_2024_Split_1.webp',
  },
  {
    id: uuidv4(),
    name: 'Faker',
    team: 'T1',
    role: 'Mid',
    marketValue: '$10,000,000',
    profileUrl: '/images/players/T1_Faker_2024_Split_1.webp',
  },
];
