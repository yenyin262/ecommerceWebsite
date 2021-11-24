import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ItemList.module.css";
import useWishlistDispatch from "../../hooks/useWishlistDispatch";
import useWishlistState from "../../hooks/useWishlistState";
import HeartButton from "../HeartButton/HeartButton";
import PropTypes from "prop-types";
import useIsClient from "../../hooks/useIsClient";

// create active state
// print price that is in active state and active state is an index
// active state on Image

export default function ItemList({ product }) {
  const isClient = useIsClient();
  const selectedProductFile = product.variants[0].files.find(
    ({ type }) => type === "preview"
  );

  const { addItem, removeItem } = useWishlistDispatch();
  const { isSaved } = useWishlistState();
  const inWishlist = isSaved(product.id);

  const toggleWishlist = () => {
    inWishlist ? removeItem(product.id) : addItem(product);
  };

  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

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
            {isClient && (
              <HeartButton onClick={toggleWishlist} filled={inWishlist} />
            )}
          </a>
        </Link>
      </div>
    </>
  );
}

ItemList.propTypes = {
  product: PropTypes.object,
};
