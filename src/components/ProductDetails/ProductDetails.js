import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProductDetails.module.css";
import ProductInfo from "../ProductInfo/ProductInfo";
import Carousel from "../Carousel/Carousel";
import useWishlistState from "../../hooks/useWishlistState";
import useWishlistDispatch from "../../hooks/useWishlistDispatch";
import HeartButton from "../HeartButton/HeartButton";
import PropTypes from "prop-types";

export default function ProductDetails({ product, otherProducts }) {
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
          <HeartButton onClick={toggleWishlist} filled={inWishlist} />
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

ProductDetails.propTypes = {
  product: PropTypes.object,
  otherProducts: PropTypes.array,
};
