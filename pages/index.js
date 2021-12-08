import ItemList from "../src/components/ItemList/ItemList";
import { getProductFromResult } from "../src/lib/getProductFromResult";
import { getProduct, getProducts } from "../src/lib/printful-client";
import styles from "../styles/index.module.css";
import PropTypes from "prop-types";

export default function Home({ products }) {
  return (
    <div className={styles.homeContainer}>
      <main className={styles.mainSection}>
        <h1 className={styles.title}>Psalm Series x YY</h1>
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
  const { result: productIds } = await getProducts();

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => {
      return await getProduct(id);
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
