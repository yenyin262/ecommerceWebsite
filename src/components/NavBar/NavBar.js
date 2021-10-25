import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import cart from "../../../public/images/icon-cart.svg";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import classNames from "classnames";

export default function NavBar({}) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navlist}>
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={80}
              height={20}
              className={styles.logo}
            />
          </Link>
        </div>

        <button className={classNames(`snipcart-checkout`, styles.navCart)}>
          <Image src={cart} alt="cart" width={20} height={20} />

          <span className={classNames(`snipcart-items-count`, styles.count)}>
            0
          </span>
        </button>
      </div>
    </nav>
  );
}
