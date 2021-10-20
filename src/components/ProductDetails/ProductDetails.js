import React, { useState } from "react";
import { getProductName } from "../../lib/getProductName";
import Image from "next/image";
import styles from "./ProductDetails.module.css";

export default function ProductDetails({ product }) {
  const [selectedProductIdx, setSelectedProductIdx] = useState(0);
  const selectedProductFile = product.variants[selectedProductIdx].files.find(
    ({ type }) => type === "preview"
  );

  const handleProductSelect = (e) => {
    setSelectedProductIdx(e.target.value);
  };

  return (
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

      <div className={styles.gridInfoItem}>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productPrice}>
          {product.variants[selectedProductIdx].retail_price}
        </div>

        <div className={styles.productSizeInfoContainer}>
          <label className={styles.sizeLabel}>Style/Size</label>
          <select
            value={selectedProductIdx}
            className={styles.selectField}
            onChange={handleProductSelect}
          >
            {product.variants.map((variant, index) => (
              <option key={variant.id} value={index}>
                {getProductName(variant.name)} - {variant.retail_price}
              </option>
            ))}
          </select>
        </div>
        <button className={styles.cartBtn}>
          <div>
            <span className={styles.btnText}>Add to cart</span>
          </div>
        </button>
      </div>
    </div>
  );
}
