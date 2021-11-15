import Head from "next/head";
import Image from "next/image";
import ItemList from "../src/components/ItemList/ItemList";
import NavBar from "../src/components/NavBar/NavBar";
import SocialMediaIcons from "../src/components/SocialMediaIcons/SocialMediaIcons";
import { getProductFromResult } from "../src/lib/getProductFromResult";

import { printful } from "../src/lib/printful-client";
import styles from "../styles/index.module.css";

export default function Home({ products }) {
  console.log(products, "pro");
  return (
    <div>
      <main className={styles.mainSection}>
        <h1 className={styles.title}>Psalms Series x YY</h1>
        <div className={styles[`grid-container`]}>
          {products.map((product) => {
            return <ItemList key={product.id} product={product} />;
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <div style={{ maxWidth: "500px" }}>
          <strong> Psalm Series</strong> Bring your ideas to life with rewards,
          inspiration, discounts and a few surprises along the way. Learn more.
          <br />
          <span> Join now </span>
        </div>
        <div>
          <SocialMediaIcons />
        </div>
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
