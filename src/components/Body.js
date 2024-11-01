
import RestaurantCard from './RestaurantCard';

import { restarantList } from '../utils/mockData';

const Body = () => {
    return (
        <div className='Body'>
            <div className='search'> Search</div>
            <div className='res-container'>
                {
                    restarantList?.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} restaurantDetails={restaurant} />
                    })
                }
            </div>
        </div>
    )
};

export default Body;