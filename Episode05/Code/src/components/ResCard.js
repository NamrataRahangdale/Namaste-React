import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating} = resData?.info;
    return (
  
      <div className="res-card">
        <img
          className="menu-image"
          alt="menu-logo"
          src={ CDN_URL + cloudinaryImageId}
        />
        <div className="card-info">
        <h4>{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwo} Rs</h4>
        <h4>{avgRating} Star</h4>
        </div>
      </div>
    )
  }
  export default ResCard;