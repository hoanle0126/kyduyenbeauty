import React from "react";
import { Helmet } from "react-helmet";
import MainLogo from "../../assets/mainLogo";

const HeaderHelmet = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="icon" type="image/svg+xml" href={MainLogo} />
    </Helmet>
  );
};

export default HeaderHelmet;
