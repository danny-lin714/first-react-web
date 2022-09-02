import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out this amazing picture</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                      src="images/20220806_154711.png"
                      text='Explore the hidden waterfall deep inside the Amazon Jungle'
                      label='Adventure'
                      path='/services'
                    />
                    <CardItem
                      src="images/20220806_155108.png"
                      text='Explore the hidden waterfall deep inside the Amazon Jungle'
                      label='Adventure'
                      path='/services'
                    />
                  </ul>
                <ul className='cards__items'>
                    <CardItem
                      src="images/20220806_160001.png"
                      text='Explore the hidden waterfall deep inside the Amazon Jungle'
                      label='Adventure'
                      path='/services'
                    />
                    <CardItem
                      src="images/20220806_160711.png"
                      text='Explore the hidden waterfall deep inside the Amazon Jungle'
                      label='Adventure'
                      path='/services'
                    />
                    <CardItem
                    src="images/20220806_210639.png"
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                  />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;
