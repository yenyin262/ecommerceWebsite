import React from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.motto}>
          <strong> Psalm Series</strong> Bringing inspiration words to you, and
          laughter along the way.
          <br />
        </div>
        <span> Shop with us</span>
      </div>
      <SocialMediaIcons />
    </footer>
  );
}
