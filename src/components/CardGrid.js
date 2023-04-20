import React from 'react';
import './CardGrid.css';
import CARDS from '../../src/data';
import Card from '../components/Card';

const CardGrid = () => {
  return (
    <div className='grid-wrapper fade-in'>
      {CARDS.map((card) => (
        <div className='card-size' key={card.id}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;