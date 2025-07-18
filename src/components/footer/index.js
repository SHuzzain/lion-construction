const Footer = () => {
  return (
    <footer className="ltn__footer-area">
      <div className="footer-top-area section-bg-2 plr--5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-6 col-12">
              <div className="footer-widget footer-about-widget">
                <div className="footer-logo">
                  <div className="site-logo">
                    <img src="/img/logo-2.png" alt="Logo" />
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the and typesetting industry.
                  Lorem Ipsum is dummy text of the printing.
                </p>
                <div className="footer-address">
                  <ul>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-placeholder"></i>
                      </div>
                      <div className="footer-address-info">
                        <p>Brooklyn, New York, United States</p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-call"></i>
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <a href="tel:+0123-456789">+0123-456789</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-mail"></i>
                      </div>
                      <div className="footer-address-info">
                        <p>
                          <a href="mailto:example@example.com">
                            example@example.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__copyright-area ltn__copyright-2 section-bg-7 plr--5">
        <div className="container-fluid ltn__border-top-2">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="ltn__copyright-design clearfix">
                <p>
                  All Rights Reserved @ Company{" "}
                  <span className="current-year">{new Date().getFullYear()}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;