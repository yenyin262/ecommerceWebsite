import React from "react";
import styles from "./Carousel.module.css";
import LikeList from "../LikeList/LikeList";
import PropTypes from "prop-types";

export default function Carousel({ otherProducts }) {
  return (
    <>
      <div className={styles.title}>You might also like </div>
      <div className={styles[`likeList-container`]}>
        {otherProducts.map((product) => {
          return <LikeList key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

Carousel.propTypes = {
  otherProducts: PropTypes.array,
};
