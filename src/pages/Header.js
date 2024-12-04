//Home>Header部分
import React from "react";
import classes from "../App.css";

export const Header = () => {
  return (
    <header className="header">
      <a href="/" className={classes.headerLink}>
        Blog
      </a>
      <a href="/contact" className={classes.headerLink}>
        お問い合わせ
      </a>
    </header>
  );
};
