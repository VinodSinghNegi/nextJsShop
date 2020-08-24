import { useRouter } from "next/router";
import data from "../utils/data.json";
import ProductView from "../components/productView";
import Navbar from "../components/navbar";
export default function Product() {
  const currentUrl = useRouter().query.product;

  const pageData = data.filter((product) => product.title === currentUrl);

  if (pageData.length > 0) {
    return (
      <div>
        <Navbar pageData={pageData[0]} />
        <div style={{ marginTop: 100 }}>
          <ProductView pageData={pageData[0]} />
        </div>
      </div>
    );
  } else if (pageData.length === 0) {
    return (
      <center>
        <h1>No Product found !</h1>
      </center>
    );
  } else {
    return (
      <center>
        <h1>Loading ...</h1>
      </center>
    );
  }
}
