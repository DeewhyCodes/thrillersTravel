import React, { useRef, useState } from "react";
import "./TrendingDestination.css";
import { placeholderImage } from "../../assets/constants";

const TrendingDestination = ({ products, className, countryData }) => {
  console.log(countryData);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const displayedProducts = [
    products[(currentIndex - 1 + products.length) % products.length],
    products[currentIndex],
    products[(currentIndex + 1) % products.length],
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`hotel-container ${className}`}>
      <div className="top">
        <h3 className="title">{products[0].title}</h3>
        <div className="carousel">
          <i className="bi bi-chevron-left" onClick={prevSlide}></i>
          <i className="bi bi-chevron-right" onClick={nextSlide}></i>
        </div>
      </div>
      <div className="product-cards">
        {displayedProducts.map((product, index) => (
          <div key={index} className={`product-card`}>
            <div className="product-image">
              <img src={product.image || placeholderImage} alt={product.name} />
            </div>
            <div className="hotel-details">
              <h2>{product.name} </h2>
              <div className="location-rating">
                <p>{product.location}</p>
                <span>
                  <i className={product.icon}></i>
                  {product.rating}
                </span>
              </div>
              <p className="description">{product.description}</p>
              <p className="price">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {products.slice(1).map((product, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TrendingDestination;
