import "antd/dist/antd.css";
import "../styles/globals.css";

import { Navbar } from "../component/Navbar";
import { Layout } from "../component/Layout";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
