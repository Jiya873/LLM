import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Top Rated", link: "#best-products" },
  { id: 3, name: "Mens Wear", link: "#mens-wear" },
  { id: 4, name: "Womens Wear", link: "#womens-wear" },
  { id: 5, name: "Jewellery", link: "#jewellery" },
  { id: 6, name: "Electronics", link: "#electronics" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchString, setSearchString] = useState("");

  // Fetch products from the API
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  fetchProducts();
}, []);

// Handle search input
const handleSearch = (e) => {
  const searchValue = e.target.value.toLowerCase();
  setSearchString(searchValue);

  // Only filter products if the search bar is not empty
  if (searchValue.trim() !== "") {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filtered);
  } else {
    setFilteredProducts([]); // Show no products if the search is empty
  }
};


  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              <FiShoppingBag size="30" />
              ShopMe
            </a>
          </div>

          {/* Search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2
                text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800"
                value={searchString}
                onChange={handleSearch}
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center h-9">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Listing */}
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-8">
        {filteredProducts.map((product) => (
          <div
            data-aos="zoom-in"
            key={product.id}
            className="space-y-3 shadow-lg p-4 rounded-md bg-white w-[230px] h-[420px] flex flex-col items-center justify-between"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-[220px] w-[200px] object-contain rounded-md"
            />
            <div className="text-center">
              <h3 className="font-semibold text-gray-800 dark:text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-600">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex justify-center items-center gap-1">
                <FaStar className="text-yellow-400" />
                <span  className="text-gray-800 dark:text-gray-800">{product.rating?.rate || 0}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Navbar;
