import { useState } from 'react';

import RestaurantCard from './RestaurantCard';

import { restarantList } from '../utils/mockData';

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restarantList);

    return (
        <div className='Body'>
            <div className='filter'>
                <button
                    className='filter-btn'
                    onClick={() => {
                        const filteredList = restarantList.filter((restaurant) => restaurant.info.avgRating > 4.3);
                        setListOfRestaurants(filteredList);
                    }}
                >Top Rated Restaurants </button>
                <button
                    className='filter-btn'
                    onClick={() => {
                        setListOfRestaurants(restarantList);
                    }}
                >Reset</button>
            </div>
            <div className='res-container'>
                {
                    listOfRestaurants?.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} restaurantDetails={restaurant} />
                    })
                }
            </div>
        </div>
    )
};

export default Body;