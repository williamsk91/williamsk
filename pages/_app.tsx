import "antd/dist/antd.css";
import "../styles/globals.css";

import { Navbar } from "../component/Navbar";
import { Layout } from "../component/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
