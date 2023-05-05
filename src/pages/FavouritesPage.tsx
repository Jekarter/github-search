import React from 'react'
import { useAppSelector } from '../hooks/redux';

const FavouritesPage = () => {
  const {favourites}  = useAppSelector(state => state.github);

  if (favourites.length === 0) return <p className='text-center'>No items.</p>
  return (
    <ul className='list-none'>
      {favourites.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default FavouritesPage