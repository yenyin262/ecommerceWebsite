import React from "react";
import styles from "./ProductInfo.module.css";
import { getProductName } from "../../lib/getProductName";
import classNames from "classnames";

export default function ProductInfo({
  product,
  selectedProductFile,
  selectedProductIdx,
  setSelectedProductIdx,
}) {
  const handleProductSelect = (e) => {
    setSelectedProductIdx(e.target.value);
  };
  return (
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

      <button
        className={classNames(`snipcart-add-item`, styles.cartBtn)}
        data-item-id={product.variants[selectedProductIdx].external_id}
        data-item-price={product.variants[selectedProductIdx].retail_price}
        data-item-url="/[productId]"
        data-item-description={`SKU: ${product.variants[selectedProductIdx].sku}`}
        data-item-image={selectedProductFile.preview_url}
        data-item-name={product.variants[selectedProductIdx].name}
        data-item-custom1-name="Gift note"
      >
        <div>
          <span className={styles.btnText}>Add to cart</span>
        </div>
      </button>
    </div>
  );
}
