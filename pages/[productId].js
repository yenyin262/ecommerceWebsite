import ProductDetails from "../src/components/ProductDetails/ProductDetails";
import { printful } from "../src/lib/printful-client";
import { getProductFromResult } from "../src/lib/getProductFromResult";
import PropTypes from "prop-types";
export default function ProductPage({ product, otherProducts }) {
  return <ProductDetails product={product} otherProducts={otherProducts} />;
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const response = await printful.get(`sync/products/${productId}`);

  const product = getProductFromResult(response);

  const { result: productIds } = await printful.get("sync/products");

  const allOtherProducts = await Promise.all(
    productIds.map(async ({ id }) => {
      return await printful.get(`sync/products/${id}`);
    })
  );

  const otherProducts = allOtherProducts
    .map(getProductFromResult)
    .filter(({ id }) => id != productId);

  return {
    props: {
      product,
      otherProducts,
    },
  };
}

export async function getStaticPaths() {
  const { result } = await printful.get("sync/products");

  const paths = result.map(({ id }) => ({
    params: {
      productId: `${id}`,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

ProductPage.propTypes = {
  product: PropTypes.object,
  otherProducts: PropTypes.array,
};
