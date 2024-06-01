import React, { useState } from 'react';

export default function Proposal({ name }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    alert(`Your proposal was successfully sent to ${name}!`);
    setText('');
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  };
  return (
    <div className='w-96 sm:w-128 mt-4 text-xl'>
      <form
        className='w-full flex flex-col items-start gap-2'
        onSubmit={handleSubmit}
      >
        <label htmlFor='proposal'>Write a proposal to scout {name}:</label>
        <textarea
          name='proposal'
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder='Your proposal here...'
          className='w-full min-h-12 appearance-none text-white bg-gray rounded-xl'
          rows='5'
        />
        <div className='w-full mt-1 flex gap-2'>
          <button className='flex-1 rounded-xl pt-2 pb-3 bg-blue border border-gold-transition'>
            Add to Roster
          </button>
          <button className='flex-1 rounded-xl pt-2 pb-3 bg-blue border border-gold-transition'>
            Scout Now
          </button>
        </div>
      </form>
    </div>
  );
}
