import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop keeps navigation transitions consistent by forcing the viewport
 * to reset to the top whenever the pathname changes.
 */
const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
