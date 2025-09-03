import { Link } from "react-router-dom";
import {IMG_CDN} from "../../utils/config"; 


const RestaurantCard = ({data}) => {
    const restID = data?.info?.id
    return (
      <div className="card">
        <Link to={`/restaurantmenu/${restID}`}>
        <img src={ IMG_CDN + data?.info?.cloudinaryImageId } alt={data?.info} />
        <p>
        <span className="card-title">{data?.info?.name}</span>
        <span className="card-tags">{data?.info.cuisines.join(", ")}</span>
        <span className="card-rating">{data?.info?.avgRating}</span>
        </p>
        </Link>
      </div>
    );
  };

export default RestaurantCard;