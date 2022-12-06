import { Link } from "react-router-dom";

export default function RestaurantCard({name,type,rating,price_starts_from,id}) {
  let words = type.split("_");

  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  words=words.join(" ")
  words.split(/(?=[A-Z])/)
  return (
    <tr data-testid="item">
      <td>
        <Link to={`/restaurants/${id}`} data-testid="name">{name}</Link>
      </td>
      <td data-testid="rating">{rating}</td>
      <td data-testid="type">{words}</td>
      <td data-testid="price">{price_starts_from}</td>
    </tr>
  );
}
