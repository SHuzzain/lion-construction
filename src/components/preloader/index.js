import { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader-inner">
      <div className="spinner">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>
      <div className="cancel-preloader">
        <a href="#" onClick={() => setLoading(false)}>
          Cancel Preloader
        </a>
      </div>
    </div>
  );
};

export default Preloader;