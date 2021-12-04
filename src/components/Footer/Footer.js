import React from "react";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{ maxWidth: "500px", marginBottom: "20px" }}>
        <strong> Psalm Series</strong> Bring your ideas to life with rewards,
        inspiration, discounts and a few surprises along the way. Learn more.
        <br />
        <span> Shop now </span>
      </div>
      <SocialMediaIcons />
    </footer>
  );
}
