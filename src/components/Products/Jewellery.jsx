import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import axios from "axios";

const Jewellery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const jewelery = response.data.filter(
          (product) => product.category === "jewelery"
        );
        setProducts(jewelery);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        console.error(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div 
    id="jewellery"
    className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          The Start of our Favorites
          </h1>
        </div>
        {/* Products Grid */}
        <div>
          <div 
          
          className="flex flex-wrap justify-center gap-8 px-4 md:px-8">
            {products.map((product) => (
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
                    <span className=" text-gray-800 dark:text-gray-800">{product.rating?.rate || 0}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
