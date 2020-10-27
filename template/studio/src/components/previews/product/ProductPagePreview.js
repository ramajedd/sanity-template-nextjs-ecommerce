import React from "react";
import IframePreview from "../iframe/IframePreview";

export default function ProductsPreview(props) {
  const { displayed } = props.document;

  return (
    <IframePreview
      {...props}
      previewURL={
        process.env.NODE_ENV === "production"
          ? `https://sanity-template-nextjs-ecommerce.sanity-io.vercel.app/products/${displayed?.slug?.current}`
          : `http://localhost:3000/products/${displayed?.slug?.current}`
      }
    />
  );
}
