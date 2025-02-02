import React from 'react';
import { createRoot } from 'react-dom/client';

/******* */
/** Chapter-7 */

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contacts from './components/Contacts';
import Error from './components/Error';

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contacts',
                element: <Contacts />
            },
        ],
        errorElement: <Error />
    },

])

const root = createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);


/******* */

/******* */
/** Chapter-5 */

// import Header from './components/Header';
// import Body from './components/Body';

// const AppLayout = () => {
//     return (
//         <div className='app'>
//             <Header />
//             <Body />
//         </div>
//     );
// };

// const root = createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
/******* */
/** Chapter-4 */
/**
 * Component List
   1. Header
      1. Logo
      2. nav bar
   2. Body
      1. Search
      2. RestaurantContainer
         1. RestaurantCard
            1. Image
            2. Name
            3. Star Rating
            4. Delivery Time
            5. Cousine
   3. Footer
      1. CopyRight
      2. Links
      3. Address
      4. Contact
 */

// const Header = () => {
//     return (
//         <div className='header'>
//             <div className='logo-container'>
//                 <img className='logo' src='https://logowik.com/content/uploads/images/free-food-delivery6258.logowik.com.webp' alt='logo' />
//             </div>
//             <div className='navItems'>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                     <li>Cart</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// const RestaurantCard = (props) => {
//     const { restaurantDetails } = props;

//     const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } = restaurantDetails?.info;
//     const { deliveryTime } = sla;
//     return (
//         <div className='res-card' >
//             <h3>{name}</h3>
//             <img
//                 src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId}
//                 alt='restaurant'
//                 className='res-logo'
//             />
//             <h4> {cuisines?.join(', ')} </h4>
//             <h4> {costForTwo} </h4>
//             <span> {avgRating} Stars </span>
//             <span> {deliveryTime} minutes </span>
//         </div>
//     )
// };

// const restarantList = [
//     {
//         info: {
//             id: "68279",
//             name: "Pizza Hut",
//             cloudinaryImageId:
//                 "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/c5d15f7b-6767-403b-9b43-75e5a3fbebd1_68279.jpg",
//             locality: "Thanisandra Main Raod",
//             areaName: "Nagawara",
//             costForTwo: "₹300 for two",
//             cuisines: ["Pizzas"],
//             avgRating: 4.1,
//             parentId: "721",
//             avgRatingString: "4.1",
//             totalRatingsString: "7.6K+",
//             sla: {
//                 deliveryTime: 31,
//                 lastMileTravel: 2.6,
//                 serviceability: "SERVICEABLE",
//                 slaString: "30-35 mins",
//                 lastMileTravelString: "2.6 km",
//                 iconType: "ICON_TYPE_EMPTY",
//             },
//             availability: {
//                 nextCloseTime: "2024-10-31 03:00:00",
//                 opened: true,
//             },
//             badges: {},
//             isOpen: true,
//             type: "F",
//             badgesV2: {
//                 entityBadges: {
//                     imageBased: {},
//                     textBased: {},
//                     textExtendedBadges: {},
//                 },
//             },
//             aggregatedDiscountInfoV3: {
//                 header: "50% OFF",
//                 subHeader: "UPTO ₹100",
//             },
//             orderabilityCommunication: {
//                 title: {},
//                 subTitle: {},
//                 message: {},
//                 customIcon: {},
//             },
//             differentiatedUi: {
//                 displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 differentiatedUiMediaDetails: {
//                     mediaType: "ADS_MEDIA_ENUM_IMAGE",
//                     lottie: {},
//                     video: {},
//                 },
//             },
//             reviewsSummary: {},
//             displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             restaurantOfferPresentationInfo: {},
//             externalRatings: {
//                 aggregatedRating: {
//                     rating: "4.1",
//                     ratingCount: "946",
//                 },
//                 source: "GOOGLE",
//                 sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
//             },
//             ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//         },
//         analytics: {
//             context: "seo-data-59366239-37a7-4b8b-9650-0dd6f336a401",
//         },
//         cta: {
//             link: "https://www.swiggy.com/city/bangalore/pizza-hut-thanisandra-main-raod-nagawara-rest68279",
//             text: "RESTAURANT_MENU",
//             type: "WEBLINK",
//         },
//         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//     {
//         info: {
//             id: "648847",
//             name: "Chinese Wok",
//             cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
//             locality: "K R Puram",
//             areaName: "Hennur",
//             costForTwo: "₹250 for two",
//             cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
//             avgRating: 4.2,
//             parentId: "61955",
//             avgRatingString: "4.2",
//             totalRatingsString: "2.0K+",
//             sla: {
//                 deliveryTime: 39,
//                 lastMileTravel: 5,
//                 serviceability: "SERVICEABLE",
//                 slaString: "35-40 mins",
//                 lastMileTravelString: "5.0 km",
//                 iconType: "ICON_TYPE_EMPTY",
//             },
//             availability: {
//                 nextCloseTime: "2024-10-31 02:00:00",
//                 opened: true,
//             },
//             badges: {
//                 imageBadges: [
//                     {
//                         imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
//                         description: "Delivery!",
//                     },
//                 ],
//             },
//             isOpen: true,
//             type: "F",
//             badgesV2: {
//                 entityBadges: {
//                     imageBased: {
//                         badgeObject: [
//                             {
//                                 attributes: {
//                                     description: "Delivery!",
//                                     imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
//                                 },
//                             },
//                         ],
//                     },
//                     textBased: {},
//                     textExtendedBadges: {},
//                 },
//             },
//             aggregatedDiscountInfoV3: {
//                 header: "ITEMS",
//                 subHeader: "AT ₹149",
//             },
//             orderabilityCommunication: {
//                 title: {},
//                 subTitle: {},
//                 message: {},
//                 customIcon: {},
//             },
//             differentiatedUi: {
//                 displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 differentiatedUiMediaDetails: {
//                     mediaType: "ADS_MEDIA_ENUM_IMAGE",
//                     lottie: {},
//                     video: {},
//                 },
//             },
//             reviewsSummary: {},
//             displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             restaurantOfferPresentationInfo: {},
//             externalRatings: {
//                 aggregatedRating: {
//                     rating: "--",
//                 },
//             },
//             ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//         },
//         analytics: {
//             context: "seo-data-59366239-37a7-4b8b-9650-0dd6f336a401",
//         },
//         cta: {
//             link: "https://www.swiggy.com/city/bangalore/chinese-wok-k-r-puram-hennur-rest648847",
//             text: "RESTAURANT_MENU",
//             type: "WEBLINK",
//         },
//         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//     {
//         info: {
//             id: "17309",
//             name: "KFC",
//             cloudinaryImageId:
//                 "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/283329f9-5ad8-4c46-9177-6b23b6eb2966_17309.JPG",
//             locality: "Manyata Embassy Business Park",
//             areaName: "Nagawara",
//             costForTwo: "₹400 for two",
//             cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
//             avgRating: 4.2,
//             parentId: "547",
//             avgRatingString: "4.2",
//             totalRatingsString: "8.1K+",
//             sla: {
//                 deliveryTime: 31,
//                 lastMileTravel: 1.9,
//                 serviceability: "SERVICEABLE",
//                 slaString: "30-35 mins",
//                 lastMileTravelString: "1.9 km",
//                 iconType: "ICON_TYPE_EMPTY",
//             },
//             availability: {
//                 nextCloseTime: "2024-10-30 23:00:00",
//                 opened: true,
//             },
//             badges: {},
//             isOpen: true,
//             type: "F",
//             badgesV2: {
//                 entityBadges: {
//                     imageBased: {},
//                     textBased: {},
//                     textExtendedBadges: {},
//                 },
//             },
//             aggregatedDiscountInfoV3: {
//                 header: "40% OFF",
//                 subHeader: "UPTO ₹80",
//             },
//             orderabilityCommunication: {
//                 title: {},
//                 subTitle: {},
//                 message: {},
//                 customIcon: {},
//             },
//             differentiatedUi: {
//                 displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 differentiatedUiMediaDetails: {
//                     mediaType: "ADS_MEDIA_ENUM_IMAGE",
//                     lottie: {},
//                     video: {},
//                 },
//             },
//             reviewsSummary: {},
//             displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             restaurantOfferPresentationInfo: {},
//             externalRatings: {
//                 aggregatedRating: {
//                     rating: "--",
//                 },
//             },
//             ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//         },
//         analytics: {
//             context: "seo-data-59366239-37a7-4b8b-9650-0dd6f336a401",
//         },
//         cta: {
//             link: "https://www.swiggy.com/city/bangalore/kfc-manyata-embassy-business-park-nagawara-rest17309",
//             text: "RESTAURANT_MENU",
//             type: "WEBLINK",
//         },
//         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//     {
//         info: {
//             id: "19957",
//             name: "Burger King",
//             cloudinaryImageId:
//                 "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_19957.JPG",
//             locality: "Elements mall",
//             areaName: "Nagavara",
//             costForTwo: "₹350 for two",
//             cuisines: ["Burgers", "American"],
//             avgRating: 4.1,
//             parentId: "166",
//             avgRatingString: "4.1",
//             totalRatingsString: "36K+",
//             sla: {
//                 deliveryTime: 51,
//                 lastMileTravel: 3.5,
//                 serviceability: "SERVICEABLE",
//                 slaString: "50-55 mins",
//                 lastMileTravelString: "3.5 km",
//                 iconType: "ICON_TYPE_EMPTY",
//             },
//             availability: {
//                 nextCloseTime: "2024-10-31 03:00:00",
//                 opened: true,
//             },
//             badges: {
//                 imageBadges: [
//                     {
//                         imageId: "Rxawards/_CATEGORY-Burger.png",
//                         description: "Delivery!",
//                     },
//                 ],
//             },
//             isOpen: true,
//             type: "F",
//             badgesV2: {
//                 entityBadges: {
//                     imageBased: {
//                         badgeObject: [
//                             {
//                                 attributes: {
//                                     description: "Delivery!",
//                                     imageId: "Rxawards/_CATEGORY-Burger.png",
//                                 },
//                             },
//                         ],
//                     },
//                     textBased: {},
//                     textExtendedBadges: {},
//                 },
//             },
//             aggregatedDiscountInfoV3: {
//                 header: "60% OFF",
//                 subHeader: "UPTO ₹120",
//             },
//             orderabilityCommunication: {
//                 title: {},
//                 subTitle: {},
//                 message: {},
//                 customIcon: {},
//             },
//             differentiatedUi: {
//                 displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 differentiatedUiMediaDetails: {
//                     mediaType: "ADS_MEDIA_ENUM_IMAGE",
//                     lottie: {},
//                     video: {},
//                 },
//             },
//             reviewsSummary: {},
//             displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             restaurantOfferPresentationInfo: {},
//             externalRatings: {
//                 aggregatedRating: {
//                     rating: "--",
//                 },
//             },
//             ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//         },
//         analytics: {
//             context: "seo-data-59366239-37a7-4b8b-9650-0dd6f336a401",
//         },
//         cta: {
//             link: "https://www.swiggy.com/city/bangalore/burger-king-elements-mall-nagavara-rest19957",
//             text: "RESTAURANT_MENU",
//             type: "WEBLINK",
//         },
//         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//     {
//         info: {
//             id: "666200",
//             name: "Kwality Walls Ice Cream and More",
//             cloudinaryImageId:
//                 "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/558ecdec-88de-4d27-94fa-dfeccd817c73_666200.JPG",
//             locality: "Aswath Nagar",
//             areaName: "Nagavara",
//             costForTwo: "₹200 for two",
//             cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
//             avgRating: 4.5,
//             veg: true,
//             parentId: "582",
//             avgRatingString: "4.5",
//             totalRatingsString: "480",
//             sla: {
//                 deliveryTime: 30,
//                 lastMileTravel: 3,
//                 serviceability: "SERVICEABLE",
//                 slaString: "25-30 mins",
//                 lastMileTravelString: "3.0 km",
//                 iconType: "ICON_TYPE_EMPTY",
//             },
//             availability: {
//                 nextCloseTime: "2024-10-31 04:30:00",
//                 opened: true,
//             },
//             badges: {
//                 imageBadges: [
//                     {
//                         imageId: "v1695133679/badges/Pure_Veg111.png",
//                         description: "pureveg",
//                     },
//                 ],
//             },
//             isOpen: true,
//             type: "F",
//             badgesV2: {
//                 entityBadges: {
//                     imageBased: {
//                         badgeObject: [
//                             {
//                                 attributes: {
//                                     description: "pureveg",
//                                     imageId: "v1695133679/badges/Pure_Veg111.png",
//                                 },
//                             },
//                         ],
//                     },
//                     textBased: {},
//                     textExtendedBadges: {},
//                 },
//             },
//             aggregatedDiscountInfoV3: {
//                 header: "₹100 OFF",
//                 subHeader: "ABOVE ₹349",
//                 discountTag: "FLAT DEAL",
//             },
//             orderabilityCommunication: {
//                 title: {},
//                 subTitle: {},
//                 message: {},
//                 customIcon: {},
//             },
//             differentiatedUi: {
//                 displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 differentiatedUiMediaDetails: {
//                     mediaType: "ADS_MEDIA_ENUM_IMAGE",
//                     lottie: {},
//                     video: {},
//                 },
//             },
//             reviewsSummary: {},
//             displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             restaurantOfferPresentationInfo: {},
//             externalRatings: {
//                 aggregatedRating: {
//                     rating: "--",
//                 },
//             },
//             ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//         },
//         analytics: {
//             context: "seo-data-59366239-37a7-4b8b-9650-0dd6f336a401",
//         },
//         cta: {
//             link: "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-aswath-nagar-nagavara-rest666200",
//             text: "RESTAURANT_MENU",
//             type: "WEBLINK",
//         },
//         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//     {
//         info: {
//             id: "790136",
//             name: "The Belgian Waffle Co.",
//             cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
//             locality: "Hebbala",
//             areaName: "Manyata Tech Park",
//             costForTwo: "₹200 for two",
//             cuisines: ["Waffle", "Desserts", "Ice Cream"],
//             avgRating: 4.5,
//             veg: true,
//             parentId: "2233",
//             avgRatingString: "4.5",
//             totalRatingsString: "625",
//             sla: {
//                 deliveryTime: 40,
//                 lastMileTravel: 4.5,
//                 serviceability: "SERVICEABLE",
//                 slaString: "40-45 mins",
//                 lastMileTravelString: "4.5 km",
//                 iconType: "ICON_TYPE_EMPTY",
//             },
//             availability: {
//                 nextCloseTime: "2024-10-30 23:00:00",
//                 opened: true,
//             },
//             badges: {
//                 imageBadges: [
//                     {
//                         imageId: "Green%20Dot%20Awards/Best%20In%20Waffle.png",
//                         description: "Delivery!",
//                     },
//                 ],
//             },
//             isOpen: true,
//             type: "F",
//             badgesV2: {
//                 entityBadges: {
//                     imageBased: {
//                         badgeObject: [
//                             {
//                                 attributes: {
//                                     description: "Delivery!",
//                                     imageId: "Green%20Dot%20Awards/Best%20In%20Waffle.png",
//                                 },
//                             },
//                         ],
//                     },
//                     textBased: {},
//                     textExtendedBadges: {},
//                 },
//             },
//             aggregatedDiscountInfoV3: {
//                 header: "20% OFF",
//                 subHeader: "UPTO ₹50",
//             },
//             orderabilityCommunication: {
//                 title: {},
//                 subTitle: {},
//                 message: {},
//                 customIcon: {},
//             },
//             differentiatedUi: {
//                 displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 differentiatedUiMediaDetails: {
//                     mediaType: "ADS_MEDIA_ENUM_IMAGE",
//                     lottie: {},
//                     video: {},
//                 },
//             },
//             reviewsSummary: {},
//             displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             restaurantOfferPresentationInfo: {},
//             externalRatings: {
//                 aggregatedRating: {
//                     rating: "--",
//                 },
//             },
//             ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//         },
//         analytics: {
//             context: "seo-data-59366239-37a7-4b8b-9650-0dd6f336a401",
//         },
//         cta: {
//             link: "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-hebbala-manyata-tech-park-rest790136",
//             text: "RESTAURANT_MENU",
//             type: "WEBLINK",
//         },
//         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//     {
//         info: {
//             id: "878240",
//             name: "Khichdi Bar",
//             cloudinaryImageId:
//                 "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/5/3b2d96cb-d217-4985-b67d-d9a749065a63_878240.jpg",
//             locality: "27 Th Cross",
//             areaName: "Sampigehalli",
//             costForTwo: "₹200 for two",
//             cuisines: ["Healthy Food", "Home Food", "North Indian", "Indian"],
//             avgRating: 4.2,
//             veg: true,
//             parentId: "442032",
//             avgRatingString: "4.2",
//             totalRatingsString: "48",
//             sla: {
//                 deliveryTime: 22,
//                 lastMileTravel: 2.1,
//                 serviceability: "SERVICEABLE",
//                 slaString: "20-25 mins",
//                 lastMileTravelString: "2.1 km",
//                 iconType: "ICON_TYPE_EMPTY",
//             },
//             availability: {
//                 nextCloseTime: "2024-10-30 22:00:00",
//                 opened: true,
//             },
//             badges: {
//                 imageBadges: [
//                     {
//                         imageId: "v1695133679/badges/Pure_Veg111.png",
//                         description: "pureveg",
//                     },
//                 ],
//             },
//             isOpen: true,
//             type: "F",
//             badgesV2: {
//                 entityBadges: {
//                     imageBased: {
//                         badgeObject: [
//                             {
//                                 attributes: {
//                                     description: "pureveg",
//                                     imageId: "v1695133679/badges/Pure_Veg111.png",
//                                 },
//                             },
//                         ],
//                     },
//                     textBased: {},
//                     textExtendedBadges: {},
//                 },
//             },
//             aggregatedDiscountInfoV3: {
//                 header: "60% OFF",
//                 subHeader: "UPTO ₹120",
//                 discountCalloutInfo: {
//                     message: "Free Delivery",
//                     logoCtx: {
//                         logo: "v1655895371/free_delivery_logo_hqipbo.png",
//                     },
//                 },
//             },
//             orderabilityCommunication: {
//                 title: {},
//                 subTitle: {},
//                 message: {},
//                 customIcon: {},
//             },
//             differentiatedUi: {
//                 displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 differentiatedUiMediaDetails: {
//                     mediaType: "ADS_MEDIA_ENUM_IMAGE",
//                     lottie: {},
//                     video: {},
//                 },
//             },
//             reviewsSummary: {},
//             displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             restaurantOfferPresentationInfo: {},
//             externalRatings: {
//                 aggregatedRating: {
//                     rating: "--",
//                 },
//             },
//             ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//         },
//         analytics: {
//             context: "seo-data-59366239-37a7-4b8b-9650-0dd6f336a401",
//         },
//         cta: {
//             link: "https://www.swiggy.com/city/bangalore/khichdi-bar-27-th-cross-sampigehalli-rest878240",
//             text: "RESTAURANT_MENU",
//             type: "WEBLINK",
//         },
//         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
//     {
//         info: {
//             id: "487130",
//             name: "The Chocolate Room",
//             cloudinaryImageId: "zodilimyubv7hyct6r1c",
//             locality: "Kalyan Nagar",
//             areaName: "Kalyan Nagar",
//             costForTwo: "₹700 for two",
//             cuisines: ["Italian", "Continental", "Desserts", "Beverages"],
//             avgRating: 4.2,
//             parentId: "1002",
//             avgRatingString: "4.2",
//             totalRatingsString: "167",
//             sla: {
//                 deliveryTime: 52,
//                 lastMileTravel: 6.2,
//                 serviceability: "SERVICEABLE",
//                 slaString: "50-55 mins",
//                 lastMileTravelString: "6.2 km",
//                 iconType: "ICON_TYPE_EMPTY",
//             },
//             availability: {
//                 nextCloseTime: "2024-10-30 23:00:00",
//                 opened: true,
//             },
//             badges: {},
//             isOpen: true,
//             type: "F",
//             badgesV2: {
//                 entityBadges: {
//                     imageBased: {},
//                     textBased: {},
//                     textExtendedBadges: {},
//                 },
//             },
//             aggregatedDiscountInfoV3: {
//                 header: "30% OFF",
//                 subHeader: "UPTO ₹150",
//                 discountTag: "SAVE BIG",
//             },
//             orderabilityCommunication: {
//                 title: {},
//                 subTitle: {},
//                 message: {},
//                 customIcon: {},
//             },
//             differentiatedUi: {
//                 displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 differentiatedUiMediaDetails: {
//                     mediaType: "ADS_MEDIA_ENUM_IMAGE",
//                     lottie: {},
//                     video: {},
//                 },
//             },
//             reviewsSummary: {},
//             displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//             restaurantOfferPresentationInfo: {},
//             externalRatings: {
//                 aggregatedRating: {
//                     rating: "4.6",
//                     ratingCount: "613",
//                 },
//                 source: "GOOGLE",
//                 sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
//             },
//             ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//         },
//         analytics: {
//             context: "seo-data-59366239-37a7-4b8b-9650-0dd6f336a401",
//         },
//         cta: {
//             link: "https://www.swiggy.com/city/bangalore/the-chocolate-room-kalyan-nagar-rest487130",
//             text: "RESTAURANT_MENU",
//             type: "WEBLINK",
//         },
//         widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
//     },
// ];

// const Body = () => {
//     return (
//         <div className='Body'>
//             <div className='search'> Search</div>
//             <div className='res-container'>
//                 {
//                     restarantList?.map((restaurant) => {
//                         return <RestaurantCard key={restaurant.info.id} restaurantDetails={restaurant} />
//                     })
//                 }
//             </div>
//         </div>
//     )
// };

// const AppLayout = () => {
//     return (
//         <div className='app'>
//             <Header />
//             <Body />
//         </div>
//     );
// };

// const root = createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

/******* */
/** Chapter-3 */
// import Header from './components/header/header';

// //  React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
// // * React Element
// // const heading = React.createElement(
// //     "h1", // tag
// //     {
// //         id: 'heading',
// //         xyz: 'abc'
// //     }, // props
// //     "Hello World from React!" // children
// // );

// // JSX - HTML-like or XML-like syntax
// //  JSX ==> Babel transpiles to React.createElement ==> ReactElement-JS Object ==> HTMLElement(render)
// const jsXHeading = (
//     <h1 id="heading" className="abc" tabIndex={1}>
//         React - element | using JSX!
//     </h1>
// );

// // * React Component
// // * React Functional Component
// // const HeadingComponent = () => {
// //     return <h1 id="heading" className="abc" tabIndex={1}>Hello World from React - using JSX!</h1>;
// // }

// const Title = () => (
//     <h1 id="title">I'm a title</h1>
// );

// // * React Component Composition
// const HeadingComponent = () => (
//     <div id='container'>
//         <Header />
//         {Title()}
//         <Title />
//         <Title></Title>
//         {jsXHeading}
//         <h1 id="heading" className="abc" tabIndex={1}>
//             Hello World from React - using functional component
//         </h1>
//     </div>
// );



// const root = createRoot(document.getElementById("root"));

// // root.render(heading);
// root.render(<HeadingComponent />);

/******* */
/** Chapter-2 */
// /**
//  *
//  * <div id="parent">
//  *      <div id="child">
//  *         <h1>I'm  H1 tag  </h1>
//  *         <h2>I'm  H2 tag  </h2>
//  *      </div>
//  *      <div id="child2">
//  *         <h1>I'm  H1 tag  </h1>
//  *         <h2>I'm  H2 tag  </h2>
//  *      </div>
//  * </div>
//  */

// const parent = React.createElement(
//     "div",
//     {
//         id: 'parent'
//     },
//     [
//         React.createElement(
//             "div",
//             {
//                 id: 'child'
//             },
//             [
//                 React.createElement(
//                     "h1",
//                     {},
//                     "I'm  H1 tag"
//                 ),
//                 React.createElement(
//                     "h2",
//                     {},
//                     "I'm  H2 tag"
//                 )
//             ]
//         ),
//         React.createElement(
//             "div",
//             {
//                 id: 'child2'
//             },
//             [
//                 React.createElement(
//                     "h1",
//                     {},
//                     "I'm  H1 tag"
//                 ),
//                 React.createElement(
//                     "h2",
//                     {},
//                     "I'm  H2 tag"
//                 )
//             ]
//         )
//     ]
// );

// console.log(parent); // object

// const root = createRoot(document.getElementById("root"));

// root.render(parent);

/******* */
/** Chapter-1 */
// const heading = React.createElement(
//     "h1", // tag
//     {
//         id: 'heading',
//         xyz: 'abc'
//     }, // props
//     "Hello World from React!" // children
// );

// console.log(heading); // object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);