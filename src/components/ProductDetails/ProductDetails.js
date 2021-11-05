import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProductDetails.module.css";
import ProductInfo from "../ProductInfo/ProductInfo";
import Carousel from "../Carousel/Carousel";

export default function ProductDetails({ product, otherProducts }) {
  console.log(product, "product details");
  const [selectedProductIdx, setSelectedProductIdx] = useState(0);
  const selectedProductFile = product.variants[selectedProductIdx].files.find(
    ({ type }) => type === "preview"
  );

  return (
    <div>
      <div className={styles.gridContainer}>
        <div className={styles.imgItem}>
          <Image
            layout="responsive"
            width={450}
            height={450}
            src={selectedProductFile.preview_url}
            className={styles.productImg}
          />
        </div>

        <ProductInfo
          product={product}
          selectedProductIdx={selectedProductIdx}
          selectedProductFile={selectedProductFile}
          setSelectedProductIdx={setSelectedProductIdx}
        />
      </div>

      <Carousel otherProducts={otherProducts} />
    </div>
  );
}
