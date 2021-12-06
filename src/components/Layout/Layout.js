import NavBar from "../NavBar/NavBar";
import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import styles from "../../../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Banner />
      <NavBar />
      <main className={styles.main}>{children}</main>
      <Footer />
      <Banner />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
