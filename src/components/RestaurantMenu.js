import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { MenuApi } from '../utils/constants';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    const [resinfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        try {
            const response = await fetch(
                // "https://crossorigin.me/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0615195&lng=77.6163803&restaurantId=232611&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
                MenuApi + resId //+ "&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
            );
            const data = await response.json();
            console.log('resinfo', data);
            setResInfo(data?.data);
        } catch (error) {
            console.log("Error fetching data: ", error);
        };
    }

    // const { name, costForTwoMessage, cloudinaryImageId, cuisines } = resinfo?.cards[2]?.card?.card?.info;
    // Add a conditional check before destructuring
    const restaurantInfo = resinfo?.cards?.[2]?.card?.card?.info;
    const { name, costForTwoMessage, cloudinaryImageId, cuisines } = restaurantInfo || {};

    const restaurantMenuRegular = resinfo?.cards?.at(-1)?.groupedCard?.cardGroupMap?.REGULAR;
    const restaurantMenuCategories = restaurantMenuRegular?.cards?.[2]?.card?.card?.categories;
    const restaurantMenuItems = restaurantMenuRegular?.cards?.[2]?.card?.card?.itemCards;

    return resinfo === null ? <Shimmer /> : (
        <div className='menu'>
            <h1>{name}</h1>
            <p>Cuisines : {cuisines?.join(', ')} | {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    restaurantMenuCategories?.length > 0 ?
                        // Add a conditional check before mapping
                        (restaurantMenuCategories)?.map((item) => (
                            <>
                                {/* <li key={item.card.info.name}>{item.card.info.name}</li> */}
                                <li key={item.categoryId}>
                                    <h3>{item.title}</h3>
                                    <ul>
                                        {
                                            item.itemCards.map((item) => (
                                                <li key={item.card.info.name}>
                                                    <h4>{item.card.info.name}</h4>
                                                    <p>{item.card.info.description}</p>
                                                    <p>₹{item.card.info.price / 100}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            </>
                        ))
                        :
                        restaurantMenuItems?.map((item) => (
                            <li key={item.card.info.name}>
                                <h4>{item.card.info.name}</h4>
                                <p>{item.card.info.description}</p>
                                <p>₹{item.card.info.price / 100}</p>
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;