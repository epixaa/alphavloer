import Head from "next/head";
import React, { useEffect, useState } from "react";
import HiddenBar from "../Header/HiddenBar";
import MobileNav from "../Header/MobileNav";
import Preloader from "./Preloader";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children, pageTitle = "Home One" }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle} || Alori || Responsive NextJS Template.</title>
      </Head>
      <Preloader loading={loading} />
      <main
        style={{ opacity: loading ? 0 : 1 }}
        id="wrapper"
        className="page-wrapper animated fadeIn"
      >
        {children}
      </main>
      <HiddenBar />
      <MobileNav />
      <ScrollToTop />
    </>
  );
};

export default Layout;
