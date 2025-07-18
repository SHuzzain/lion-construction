const Header = ({ topbar = true }) => {
  return (
    <header className="ltn__header-area ltn__header-5 ltn__header-transparent">
      {topbar && (
        <div className="ltn__header-top-area">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <a href="mailto:info@webmail.com">
                        <i className="icon-mail"></i>
                        info@webmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+0123-456789">
                        <i className="icon-call"></i>
                        +0123-456789
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="site-logo-wrap">
                <div className="site-logo">
                  <a href="/">
                    <img src="/img/logo.png" alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col header-menu-column">
              <div className="header-menu d-none d-xl-block">
                <nav>
                  <div className="ltn__main-menu">
                    <ul>
                      <li className="menu-icon">
                        <a href="/">Home</a>
                      </li>
                      <li className="menu-icon">
                        <a href="/about">About</a>
                      </li>
                      <li className="menu-icon">
                        <a href="/service">Services</a>
                      </li>
                      <li className="menu-icon">
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;