import ProductDetails from "../src/components/ProductDetails/ProductDetails";
import { getProduct, getProducts } from "../src/lib/printful-client";
import { getProductFromResult } from "../src/lib/getProductFromResult";
import PropTypes from "prop-types";

export default function ProductPage({ product, otherProducts }) {
  if (!product) return <></>;
  return <ProductDetails product={product} otherProducts={otherProducts} />;
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const response = await getProduct(productId);

  const product = getProductFromResult(response);

  const { result: productIds } = await getProducts();

  // find a way to make one request on all pages

  const allOtherProducts = await Promise.all(
    productIds.map(async ({ id }) => {
      return await getProduct(id);
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
  const { result } = await getProducts();

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
