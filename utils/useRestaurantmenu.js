import { useState } from "react";
import {GET_MENU_API_URL} from "../utils/config.js"; 

const useRestaurantMenu = (restID) => {
    const [resInfo, setResInfo] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [error, setError] = useState(null);
    // const GET_MENU_API_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&submitAction=Enter`

    const fetchMenu = async () => {
        try {
            const response = await fetch(GET_MENU_API_URL(id));
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
 
            if (json?.message?.includes("Oops!! Something Went Wrong")) {
                throw new Error("API Error: " + json.message);
            }

            const restaurantData = json?.data?.cards[2]?.card?.card?.info;
            setResInfo(restaurantData);

            const menuItemsData = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
            setMenuItems(menuItemsData);
        } catch (err) {
            setError(err.message);
        }
    };

    return { 
    resInfo, menuItems, error, fetchMenu 
    };
} 