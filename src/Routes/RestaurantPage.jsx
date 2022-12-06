import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

function RestaurantPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [type, setType] = useState("");
  const { id } = useParams();
  var words = "";
  words = type.split("_");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  words = words.join(" ");
  words.split(/(?=[A-Z])/);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log("REsponse from server ", res.data);
        setType(res.data.type);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div data-testid="restaurant-container">
      <img
        data-testid="restaurant-image"
        src={data.image}
        alt={data.name}
        width={"100%"}
      />
      <div>
        <h4 data-testid="restaurant-name">{data.name}</h4>
      </div>
      <div className="flex">
        <div>
          Type:
          <b data-testid="restaurant-type">{words}</b>
        </div>
        <div>
          Rating:
          <b data-testid="restaurant-rating">{data.rating}</b>
        </div>
      </div>
      <div className="flex">
        <div>
          Votes:
          <b data-testid="restaurant-votes">{data.number_of_votes}</b>
        </div>
        <div>
          Starting Price:
          <b data-testid="restaurant-price">{data.price_starts_from}</b>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default RestaurantPage;
