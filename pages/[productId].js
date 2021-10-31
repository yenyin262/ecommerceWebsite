import React from "react";
import ProductDetails from "../src/components/ProductDetails/ProductDetails";
import { printful } from "../src/lib/printful-client";
import { getProductFromResult } from "../src/lib/getProductFromResult";
import Layout from "../src/components/Layout/Layout";

export default function ProductPage({ product, otherProducts }) {
  return (
    <Layout>
      <ProductDetails product={product} otherProducts={otherProducts} />
    </Layout>
  );
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
  console.log(
    "🚀 ~ file: [productId].js ~ line 28 ~ getStaticProps ~ otherProducts",
    otherProducts
  );

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
