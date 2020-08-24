import { useState } from "react";
import { useRouter } from "next/router";
import CheckoutPage from "../../components/checkoutPage";
import Success from "../../components/success";
import Navbar from "../../components/navbar";
import data from "../../utils/data.json";
export default function Checkout() {
  const currentUrl = useRouter().query.checkoutProduct;
  const pageData = data.filter((product) => product.title === currentUrl);
  const [state, setState] = useState({
    name: null,
    email: null,
    contact: null,
    address: null,
    coupon: null,
    payment: false,
  });

  if (pageData.length > 0) {
    if (!state.payment) {
      return (
        <div>
          <Navbar pageData={pageData[0]} />
          <CheckoutPage
            state={state}
            setState={setState}
            product={pageData[0]}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />;
          <Success name={state.name} />;
        </div>
      );
    }
  } else if (pageData.length === 0) {
    return (
      <center>
        <h1>No Product to checkout !</h1>
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
