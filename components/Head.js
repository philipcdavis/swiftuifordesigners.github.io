import React from "react";
import NextHead from "next/head";
import { NextSeo } from "next-seo";

const Head = function (props) {
  const title = props.title ? props.title : "SwiftUI for Designers";
  const description = props.description
    ? props.description
    : "SwiftUI is a powerful design tool.";
  const image = props.image ? props.image : "/og.png";
  return (
    <>
      <NextHead>
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </NextHead>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: title,
          description: description,
          images: [
            {
              url: image,
            },
          ],
          site_name: "SwiftUI for Designers",
        }}
        twitter={{
          handle: "@philipcdavis",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
};

export default Head;
