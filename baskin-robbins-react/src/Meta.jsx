import { Meta, MetaProvider } from "react-helmet-async";

const Meta = () => {
  return (
    <MetaProvider>
      <Meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Meta>
    </MetaProvider>
  );
};

export default Meta;
