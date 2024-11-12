import { useState, useEffect } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// import { restarantList } from '../utils/mockData';

const Body = () => {

    // Whenever state variable gets updated, react triggers a reconciliation process ( re-rendering of the component )

    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    const [copyOfRestaurants, setCopyOfRestaurants] = useState(null);

    const [searchText, setSearchText] = useState("");

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0615195&lng=77.6163803&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const data = await response.json();
            const restaurant_list = await data?.data?.cards?.[4]?.card?.card
                ?.gridElements?.infoWithStyle?.restaurants;
            console.log(data, restaurant_list);
            setCopyOfRestaurants(restaurant_list);
            setListOfRestaurants(restaurant_list);
        } catch (error) {
            console.log("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // // conditional rendering
    // if(!listOfRestaurants || listOfRestaurants?.length === 0) {
    //     // Shimmer UI can be added here
    //     return <Shimmer />;
    // }

    return !listOfRestaurants || listOfRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="Body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for restaurants"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            // Filter the restaurant cards based on the search input and update the UI
                            // searchText = input value
                            const filteredList = copyOfRestaurants.filter((restaurant) =>
                                restaurant.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );
                            setListOfRestaurants(filteredList);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div>
                    <button
                        className="filter-btn"
                        onClick={() => {
                            const filteredList = copyOfRestaurants.filter(
                                (restaurant) => restaurant.info.avgRating > 4.3
                            );
                            setListOfRestaurants(filteredList);
                        }}
                    >
                        Top Rated Restaurants{" "}
                    </button>
                    <button
                        className="filter-btn"
                        onClick={() => {
                            setListOfRestaurants(copyOfRestaurants);
                            setSearchText(""); // Reset the search input
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div className="res-container">
                {listOfRestaurants?.map((restaurant) => {
                    return (
                        <RestaurantCard
                            key={restaurant.info.id}
                            restaurantDetails={restaurant}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
