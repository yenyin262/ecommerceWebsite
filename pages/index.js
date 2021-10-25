import Head from "next/head";
import Image from "next/image";
import ItemList from "../src/components/ItemList/ItemList";
import NavBar from "../src/components/NavBar/NavBar";
import { getProductFromResult } from "../src/lib/getProductFromResult";

import { printful } from "../src/lib/printful-client";
import styles from "../styles/index.module.css";

export default function Home({ products }) {
  console.log(products, "pro");
  return (
    <div>
      {/* <NavBar /> */}

      <main className={styles.mainSection}>
        <h1 className={styles.title}>Psalms Series x YY</h1>
        <div className={styles[`grid-container`]}>
          {products.map((product) => {
            return <ItemList key={product.id} product={product} />;
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const { result: productIds } = await printful.get("sync/products");

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => {
      return await printful.get(`sync/products/${id}`);
    })
  );

  const products = allProducts.map(getProductFromResult);

  return {
    props: {
      products,
    },
  };
}
