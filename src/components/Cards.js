import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out</h1>
        <div className='cards__container'>
            <div className='cards__wapper'>
                <ul className='cards__item'>
                    <CardItem
                    src="images/img-3.jpg"
                    text="explore"
                    label="adventure"
                    path="services"

                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;
