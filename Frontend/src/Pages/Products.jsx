import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const Product = () => {
  //   const [product, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  category.products = [{
    _id: "5f8d9d6b0b8b9c0a0d2f2e0f",
    name: "Product 1",
    price: 100,
    imgUrl:
      "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: "5f8d9d6b0b8b9c0a0d2f2e10",
    name: "Product 2",
    price: 200,
    imgUrl:
      "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    _id: "5f8d9d6b0b8b9c0a0d2f2e11",
    name: "Product 3",
    price: 300,
    imgUrl:
      "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  }]

  return (
    <>
      <div className="pt-6 ">
        <div className="flex justify-center items-center gap-5 flex-wrap">
          <div className=" w-5/6 h-16 bg-blue-500 flex items-center justify-center text-white rounded-xl">
            <h1 className="text-3xl">{"Category"}</h1>
          </div>
        </div>
        <div className=" p-5 flex justify-center items-center gap-5 flex-wrap">
          {category.products.map((product) => (
            <ProductCard
              img={product.imgUrl}
              ProductName={product.name}
              ProductPrice={product.price}
              id={product._id}
              key={product._id}
            />
          ))}
        </div>
      </div>
      <div className="pt-6 ">
        <div className="flex justify-center items-center gap-5 flex-wrap">
          <div className=" w-5/6 h-16 bg-blue-500 flex items-center justify-center text-white rounded-xl">
            <h1 className="text-3xl">{"Category"}</h1>
          </div>
        </div>
        <div className=" p-5 flex justify-center items-center gap-5 flex-wrap">
          {category.products.map((product) => (
            <ProductCard
              img={product.imgUrl}
              ProductName={product.name}
              ProductPrice={product.price}
              id={product._id}
              key={product._id}
            />
          ))}
        </div>
      </div>
      <div className="pt-6 ">
        <div className="flex justify-center items-center gap-5 flex-wrap">
          <div className=" w-5/6 h-16 bg-blue-500 flex items-center justify-center text-white rounded-xl">
            <h1 className="text-3xl">{"Category"}</h1>
          </div>
        </div>
        <div className=" p-5 flex justify-center items-center gap-5 flex-wrap">
          {category.products.map((product) => (
            <ProductCard
              img={product.imgUrl}
              ProductName={product.name}
              ProductPrice={product.price}
              id={product._id}
              key={product._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
