import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content="props.description" />
        <meta name="keywords" content="props.keywords" />
        <meta name="author" content="props.author" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.deescription} />
        <meta property="og:url" content={props.url} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "Baskin Robbins website",
  description: "Baskin Robbins website clone coding",
  keyword: "baskin robbins, clone",
  author: "sohui suh",
  url: window.location.href,
};

export default Meta;
