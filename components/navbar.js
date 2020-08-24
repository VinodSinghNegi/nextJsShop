import SearchBar from "./searchbar";
import Link from "next/link";

export default function Navbar({ pageData }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        padding: 10,
        top: 0,
        position: "fixed",
        fontWeight: "bold",
        backgroundColor: "rgb(168 174 202)",
      }}
    >
      <div style={{ width: "35%" }}>
        <Link as="/" href="/">
          Next js Shop
        </Link>
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          fontSize: 25,
          fontVariant: "small-caps",
          color: "white",
        }}
      >
        {pageData ? pageData.name : "Shop More"}
      </div>
      <div style={{ width: "30%", display: "flex" }}>
        <SearchBar />
      </div>
    </div>
  );
}
