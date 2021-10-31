import next from "next";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./LikeList.module.css";
import ExpressCart from "../ExpressCart/ExpressCart";

export default function LikeList({ product }) {
  console.log(product, "product here ");
  const [selectedProductIdx, setSelectedProductIdx] = useState(0);
  const selectedProductFile = product.variants[selectedProductIdx].files.find(
    ({ type }) => type === "preview"
  );

  return (
    <div className={styles.itemContainer}>
      <a className={styles.gridItemContainer}>
        <Image
          width={200}
          height={200}
          src={selectedProductFile.preview_url}
          className={styles.productImg}
        />
        <div className={styles.productdetailsContainer}>
          <div className={styles[`product-name`]}>{product.name}</div>
          <div className={styles[`product-price`]}>
            {product.variants[0].retail_price}
          </div>
        </div>
        <div className={styles.expressCartContainer}>
          <ExpressCart
            selectedProductIdx={selectedProductIdx}
            setSelectedProductIdx={setSelectedProductIdx}
            product={product}
          />
        </div>
      </a>
    </div>
  );
}
