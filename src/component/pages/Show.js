import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Show({ children }) {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname);
  const [display, setDisplay] = useState(true);
  function checkDisplay() {
    const productRegex = /^\/product\/\d*$/;
    if (
      pathname == "/" ||
      pathname == "/cart" ||
      pathname == "/about" ||
      pathname == "/contact" ||
      pathname == "/product" ||
      productRegex.test(pathname)
    ) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  }

  useEffect(() => {
    checkDisplay();
  }, [location]);

  return <div>{display && children}</div>;
}

export default Show;
