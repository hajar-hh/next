"use client";

// import { notFound } from "next/navigation";
import React from "react";

const Page = ({ params }) => {
  const products = [
    { id: "1", name: "Product 1" },
    { id: "2", name: "Product 2" },
    { id: "3", name: "Product 3" },
  ];

  const product = products.find((pro) => pro.id === params.productId);

  if (product) {
    return (
      <div className="product-card">
        <h1>{product.name}</h1>
        <p>This is product ID: {params.productId}</p>
      </div>
    );
  } else {
    return (
      <div className="not-found-container">
        <h1>404 - Product Not Found</h1>
      </div>
    );
  }
};

export default Page;
