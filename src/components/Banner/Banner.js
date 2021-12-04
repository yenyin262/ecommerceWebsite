import styles from "./Banner.module.css";
import Link from "next/link";
import cart from "../../../public/images/icon-cart.svg";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import classNames from "classnames";
import useWishlistState from "../../hooks/useWishlistState";
import useIsClient from "../../hooks/useIsClient";

export default function Banner({}) {
  return (
    <div className={styles.navbar}>
      <div className={styles.navlist}>
        This website is built for educational purposes only. Orders will not be
        fulfilled.
      </div>
    </div>
  );
}
