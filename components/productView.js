import { Button } from "@material-ui/core";
import Link from "next/link";

export default function ProductView({ pageData }) {
  const name = pageData.name;
  const title = pageData.title;
  const description = pageData.description;
  const price = pageData.price;
  const image = pageData.image;
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {image.map((img, i) => (
          <div style={{ margin: 20 }} key={i}>
            <img src={img} alt="pic" height="300px" />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#d7d1edbd",
          paddingBottom: 10,
          borderRadius: 20,
          margin: 10,
        }}
      >
        <p>Price : {price}</p>
        <Link as={`/checkout/${title}`} href="/checkout/[checkoutProduct]">
          <Button variant="contained" color="primary" size="small">
            Buy Now
          </Button>
        </Link>
      </div>
      <div
        style={{
          backgroundColor: "#d7d1edbd",
          borderRadius: 20,
          padding: 10,
          margin: 10,
        }}
      >
        {description.map((value, i) => (
          <ul key={i}>
            <li>{value}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
