import "../styles/globals.css";
import Layout from "../src/components/Layout/Layout";
import { WishlistProvider } from "../src/context/wishlist";
function MyApp({ Component, pageProps }) {
  return (
    <WishlistProvider>
      <Component {...pageProps} />
    </WishlistProvider>
  );
}

export default MyApp;
