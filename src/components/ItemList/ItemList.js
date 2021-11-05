import next from "next";
import { imageConfigDefault } from "next/dist/server/image-config";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProductName } from "../../lib/getProductName";
import styles from "./ItemList.module.css";
import HeartButton from "../HeartButton/HeartButton";
import RedHeartButton from "../RedHeartButton/RedHeartButton";

import useWishlistDispatch from "../../hooks/useWishlistDispatch";
import useWishlistState from "../../hooks/useWishlistState";

// create active state
// print price that is in active state and active state is an index
// active state on Image

export default function ItemList({ product }) {
  const selectedProductFile = product.variants[0].files.find(
    ({ type }) => type === "preview"
  );

  const { addItem, removeItem } = useWishlistDispatch();
  const { isSaved } = useWishlistState();
  const inWishlist = isSaved(product.id);

  const toggleWishlist = () => {
    inWishlist ? removeItem(product.id) : addItem(product);
  };

  return (
    <>
      <div className={styles.shy}>
        <Link href={`/${product.id}`}>
          <a className={styles.gridItemContainer}>
            <Image
              width={250}
              height={250}
              src={selectedProductFile.preview_url}
              className={styles.productImg}
            />

            <div className={styles.productdetailsContainer}>
              <div className={styles[`product-name`]}>{product.name}</div>
              <div className={styles[`product-price`]}>
                {product.variants[0].retail_price}
              </div>
            </div>
            <HeartButton onClick={toggleWishlist} filled={inWishlist} />
          </a>
        </Link>
      </div>
    </>
  );
}
