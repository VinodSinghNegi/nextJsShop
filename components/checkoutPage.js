import { TextField, Button } from "@material-ui/core";

export default function CheckoutPage({ state, setState, product }) {
  return (
    <center>
      <div
        style={{
          backgroundColor: "#E1DDF1",
          marginTop: 120,
          borderRadius: 20,
          minWidth: 500,
          width: 500,
          padding: 20,
        }}
      >
        <p>Please fill below details to continue your purchase...</p>
        <form
          noValidate={false}
          autoComplete="off"
          onSubmit={() => setState({ ...state, payment: true })}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            label="Name"
            size="small"
            required
            margin="normal"
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <TextField
            label="Email"
            type="email"
            size="small"
            required
            margin="dense"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <TextField
            label="Contact"
            type="number"
            size="small"
            required
            margin="dense"
            onChange={(e) => setState({ ...state, contact: e.target.value })}
          />

          <TextField
            label="Address"
            type="address"
            margin="dense"
            required
            onChange={(e) => setState({ ...state, address: e.target.value })}
          />
          <TextField
            label="Coupon (if any)"
            size="small"
            margin="dense"
            onChange={(e) => setState({ ...state, coupon: e.target.value })}
          />
          <div>
            <br />
            <p>Price {product.price}</p>
            <br />
            <Button variant="contained" color="primary" type="submit">
              Checkout
            </Button>
          </div>
        </form>
      </div>
    </center>
  );
}
