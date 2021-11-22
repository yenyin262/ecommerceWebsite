import Twitter from "../Twitter";
import Facebook from "../Facebook";
import Instagram from "../Instagram";
import styles from "./SocialMediaIcons.module.css";
import ProductPage from "../../../pages/[productId]";

export default function SocialMediaIcons() {
  return (
    <div className={styles.icons}>
      <Twitter />
      <Facebook />
      <Instagram />
    </div>
  );
}
