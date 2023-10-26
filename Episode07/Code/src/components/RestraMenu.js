import {useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestraMenu = ()=>{
const[resInfo, setResInfo] = useState(null);

const {resId}= useParams();
console.log(resId);

console.log(useState());
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch(MENU_API+ resId );
        
        const json = await data.json();
        setResInfo(json.data);
    }
    const {name, cuisines} = resInfo?.cards[0]?.card?.card?.info ||{};
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
    console.log(itemCards);
    return resInfo === null ? <Shimmer /> :(
        <div className="menu">
            <h1>Restaurants Name : {name}</h1>
            
            <h2>Cuisines</h2>
            <p>{cuisines.join (",")}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map(items =>
                <li key={items?.card.info.id}>
                    {items?.card.info.name} - {items?.card.info.price}
                </li>)}
               {/* // <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>Biriyani</li>
                <li>Biriyani</li>
                <li>Biriyani</li> */}
            </ul>
        </div>
    );
};
export default RestraMenu;