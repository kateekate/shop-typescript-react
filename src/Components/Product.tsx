import React, { useState } from "react";
import IProduct from "../models";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const [description, setDescription] = useState(false);
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      <h3 className="font-bold">{product.title}</h3>
      <p className="font-bold">{product.price}</p>

      <button onClick={() => setDescription((prev) => !prev)}>
        {description ? "Hide description" : "Show description"}
      </button>
      {description && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}
