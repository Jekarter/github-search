import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
      <h3 className='font-bold'>GitHub Search</h3>
      <span>
        <Link to='/' className='mr-2'>Главная</Link>
        <Link to='/favourites'>Избранное</Link>
      </span>
    </nav>

  )
}

export default Navigation