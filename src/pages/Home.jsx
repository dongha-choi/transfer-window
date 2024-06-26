import React from 'react';
import Players from './Players';

export default function Home() {
  return (
    <section>
      <article className='w-11/12 mt-4 m-auto text-4xl font-bold'>
        Welcome to League of Legends Official Transfer Window. <br />
        Scout the FA Players, and Make Your Own Team. <br />
        Build the Best Roster to win Worlds 2024.
      </article>
      <Players />
    </section>
  );
}
