
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  ratingsAverage: number;
  imageCover: string;
  category: { name: string };
}

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const handleRemove = (id: string) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="w-full px-5 md:px-0 md:w-[80%] mx-auto my-10">
      <h2 className="text-2xl font-bold mb-5">🛒 Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      <div className="flex flex-wrap gap-5">
        {cart.map((product) => (
          <div key={product.id} className="border p-4 rounded w-full md:w-1/3">
            <Image
              src={product.imageCover}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <h3 className="font-bold mt-2">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 font-semibold">{product.price} EGP</p>
            <p>
              {product.ratingsAverage}{" "}
              <i className="fa-solid fa-star text-yellow-300"></i>
            </p>
            <Button
              className="mt-2 w-full"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;

 
