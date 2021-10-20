import React from "react";
import ProductDetails from "../src/components/ProductDetails/ProductDetails";
import { printful } from "../src/lib/printful-client";
import { getProductFromResult } from "../src/lib/getProductFromResult";
import Layout from "../src/components/Layout/Layout";

export default function ProductPage({ product }) {
  return (
    <Layout>
      <ProductDetails product={product} />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const response = await printful.get(`sync/products/${productId}`);

  const product = getProductFromResult(response);

  return {
    props: {
      product,
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
