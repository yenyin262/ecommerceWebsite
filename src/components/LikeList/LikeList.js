import next from "next";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./LikeList.module.css";
import ExpressCart from "../ExpressCart/ExpressCart";
import useWishlistDispatch from "../../hooks/useWishlistDispatch";
import useWishlistState from "../../hooks/useWishlistState";
import HeartButton from "../HeartButton/HeartButton";

export default function LikeList({ product }) {
  const [selectedProductIdx, setSelectedProductIdx] = useState(0);
  const selectedProductFile = product.variants[selectedProductIdx].files.find(
    ({ type }) => type === "preview"
  );

  const { addItem, removeItem } = useWishlistDispatch();
  const { isSaved } = useWishlistState();
  const inWishlist = isSaved(product.id);

  const toggleWishlist = () => {
    inWishlist ? removeItem(product.id) : addItem(product);
  };

  return (
    <div className={styles.itemContainer}>
      <a className={styles.gridItemContainer}>
        <div className={styles.imgItem}>
          <Image
            width={200}
            height={200}
            src={selectedProductFile.preview_url}
            className={styles.productImg}
          />{" "}
          <HeartButton onClick={toggleWishlist} filled={inWishlist} />
        </div>

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
