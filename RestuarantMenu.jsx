import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../../utils/config.js";
// import useRestaurantMenu from "../utils/useRestaurantmenu.js";


const BASE_IMAGE_UEL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"

const RestuarantMenu = () => {
    const {id} = useParams(); // call params and get value of restaurant id using object destructuring 
  
    const resInfo = useRestaurantMenu(restID); 

    if (resInfo === null) { return <Shimmer /> }
 
    return (
        <div className="restaurant-menu">
            <div className="restaurant-summary">
                <img src={IMG_CDN} alt={name} />
                <div>
                    <h2>{resInfo?.name}</h2>
                    <p>{resInfo?.cuisines?.join(", ")}</p>
                    <p>{resInfo?.avgRating} ★ | {resInfo?.sla?.slaString} | {resInfo?.costForTwoMessage}</p>
                </div>
            </div>

            <div className="recommendation">
                {
                    menuItems.map((item, index) => {
                        return (
                            <div className="menu-item" key={index}>
                                <img src={BASE_IMAGE_UEL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                                <div>
                                    <h3>{item?.card?.info?.name}</h3>
                                    <p>{item?.card?.info?.description}</p>
                                    <p>₹ {item?.card?.info?.price}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default RestuarantMenu;