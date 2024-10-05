"use client";

import products from "@/data/product";
import {
  BaseballCap,
  Books,
  CirclesThreePlus,
  TShirt,
} from "@phosphor-icons/react";
import { useState } from "react";
import ProductsCards from "./ProductsCards";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(
    products.filter((product) => product.category.toLowerCase() === "cap")
  );
  const [activeCategory, setActiveCategory] = useState("cap");

  const filterProducts = (category) => {
    setFilteredProducts(
      products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    );
    setActiveCategory(category);
  };

  return (
    <div className="bg-white-background">
      <div className="container mx-auto px-5 py-10 md:py-32">
        <h3 className="font-semibold uppercase text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
          Buy 1 get 1 Free <br /> on{" "}
          <span className="text-stroke">best selling products</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mt-12 mb-6">
          <Button
            onClick={() => filterProducts("cap")}
            active={activeCategory === "cap"}
            icon={<BaseballCap size={32} weight="light" />}
          >
            Caps
          </Button>
          <Button
            onClick={() => filterProducts("book")}
            active={activeCategory === "book"}
            icon={<Books size={32} weight="light" />}
          >
            Books
          </Button>
          <Button
            onClick={() => filterProducts("shirt")}
            active={activeCategory === "shirt"}
            icon={<TShirt size={32} weight="light" />}
          >
            T-Shirts
          </Button>
          <Button
            onClick={() => filterProducts("accessories")}
            active={activeCategory === "accessories"}
            icon={<CirclesThreePlus size={32} weight="light" />}
          >
            Accessories
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductsCards key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

export const Button = ({ children, onClick, active, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 rounded-lg bg-red-100 text-primary font-medium px-5 py-4 transition-all duration-200 hover:bg-red-200 ${
        active && "bg-red-600 hover:bg-red-600 text-white"
      }`}
    >
      {icon}
      {children}
    </button>
  );
};
