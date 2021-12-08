import styles from "./NavBar.module.css";
import Link from "next/link";
import cart from "../../../public/images/icon-cart.svg";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import classNames from "classnames";
import useWishlistState from "../../hooks/useWishlistState";
import useIsClient from "../../hooks/useIsClient";

export default function NavBar({}) {
  const isClient = useIsClient();
  const { hasItems, itemsCount } = useWishlistState();

  return (
    <div className={styles.navbar}>
      <div className={styles.navlist}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a className={styles.text}>
              {/* <Image
                src={logo}
                alt="logo"
                width={80}
                height={20}
                className={styles.logo}
              /> */}
              Psalm Series
            </a>
          </Link>
        </div>
        <div className={styles.icons}>
          <Link href="/wishlist">
            <a className={styles.heartLink}>
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={classNames(styles.wishlistbtn)}
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                </svg>

                {isClient && hasItems && (
                  <span className={styles.countBtn}>{itemsCount}</span>
                )}
              </>
            </a>
          </Link>

          <button className={classNames(`snipcart-checkout`, styles.navCart)}>
            <Image src={cart} alt="cart" width={20} height={20} />
            <span className={classNames(`snipcart-items-count`, styles.count)}>
              0
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
