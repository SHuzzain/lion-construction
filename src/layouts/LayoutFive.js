import { Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const LayoutFive = ({ children, topbar = true }) => {
  return (
    <Fragment>
      <Header topbar={topbar} />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default LayoutFive;