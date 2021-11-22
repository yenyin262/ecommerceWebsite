import ItemList from "../src/components/ItemList/ItemList";
import SocialMediaIcons from "../src/components/SocialMediaIcons/SocialMediaIcons";
import { getProductFromResult } from "../src/lib/getProductFromResult";
import { printful } from "../src/lib/printful-client";
import styles from "../styles/index.module.css";
import PropTypes from "prop-types";

export default function Home({ products }) {
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

Home.propTypes = {
  products: PropTypes.array,
};
