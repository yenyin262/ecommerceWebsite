import React from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{ maxWidth: "500px", marginBottom: "20px" }}>
        <strong> Psalm Series</strong> Bringing inspiration words to you, and
        laughter along the way. Learn more.
        <br />
        <span> Shop now </span>
      </div>
      <SocialMediaIcons />
    </footer>
  );
}
