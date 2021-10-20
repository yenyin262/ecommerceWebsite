import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";
import cart from "../../../public/images/icon-cart.svg";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";

export default function NavBar() {
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
        <div>
          <Image src={cart} alt="cart" width={15} height={15} />
        </div>
      </div>
    </nav>
  );
}
