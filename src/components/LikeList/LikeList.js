import next from "next";
import { imageConfigDefault } from "next/dist/server/image-config";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductName } from "../../lib/getProductName";
import styles from "./LikeList.module.css";

// create active state
// print price that is in active state and active state is an index
// active state on Image

export default function LikeList({ product }) {
  console.log(product, "product here ");
  const selectedProductFile = product.variants[0].files.find(
    ({ type }) => type === "preview"
  );
  return (
    <div>
      <Link href={`/${product.id}`}>
        <a className={styles.gridItemContainer}>
          <Image
            width={150}
            height={150}
            src={selectedProductFile.preview_url}
            className={styles.productImg}
          />
          <div className={styles.productdetailsContainer}>
            <div className={styles[`product-name`]}>{product.name}</div>
            <div className={styles[`product-price`]}>
              {product.variants[0].retail_price}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
