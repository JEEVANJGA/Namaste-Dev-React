import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { restaurantDetails } = props;

    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } = restaurantDetails?.info;
    const { deliveryTime } = sla;
    return (
        <div className='res-card' >
            <h3>{name}</h3>
            <img
                src={CDN_URL + cloudinaryImageId}
                alt='restaurant'
                className='res-logo'
            />
            <h4> {cuisines?.join(', ')} </h4>
            <h4> {costForTwo} </h4>
            <span> {avgRating} Stars </span>
            <span> {deliveryTime} minutes </span>
        </div>
    )
};

export default RestaurantCard;