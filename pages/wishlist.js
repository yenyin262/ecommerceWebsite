import useWishlistState from "../src/hooks/useWishlistState";
import ItemList from "../src/components/ItemList/ItemList";
import styles from "../styles/wishlist.module.css";

const WishlistPage = () => {
  const { hasItems, items, itemsCount } = useWishlistState();
  return (
    <>
      <main className={styles.mainSection}>
        <h1 className={styles.title}> Your wish lists </h1>
        <h2 className={styles.itemCounter}>
          {hasItems ? `${itemsCount} items` : null}
        </h2>

        {hasItems ? (
          <div className={styles[`grid-container`]}>
            {items.map((product) => {
              return <ItemList key={product.id} product={product} />;
            })}
          </div>
        ) : (
          <div className={styles.message}>Your wish list looks empty! </div>
        )}
      </main>
    </>
  );
};

export default WishlistPage;
