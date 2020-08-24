import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/searchbar";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs Ecommerce </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a> Next js Shop</a>
        </h1>
        <p className={styles.description}>Start by Searching your product...</p>
        <div style={{ width: "45%" }}>
          <SearchBar />
        </div>
      </main>
    </div>
  );
}
