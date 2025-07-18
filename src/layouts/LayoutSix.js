import { Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const LayoutSix = ({ children, topbar = true }) => {
  return (
    <Fragment>
      <Header topbar={topbar} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default LayoutSix;