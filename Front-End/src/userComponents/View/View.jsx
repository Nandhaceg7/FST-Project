import React from "react";
import "./View.css"; 
// import express from  './express';

export default function View() {

  
  const product = {
    id: 1,
    title: "Apple iPhone 15 Pro (128GB) - Titanium",
    price: 999.99,
    rating: 4.5,
    reviews: 1200,
    description:
      "Experience the power of Apple's latest A17 Bionic chip with an all-new titanium design.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  };

  return (
    <div className="product-container">
      
      <img src={product.image} alt={product.title} className="product-image" />

    
      <h1 className="product-title">{product.title}</h1>
      <p className="product-price">${product.price.toFixed(2)}</p>

     
      <div className="product-rating">
        <span>⭐ {product.rating}</span>
        <span className="review-count">({product.reviews} reviews)</span>
      </div>

      
      <p className="product-description">{product.description}</p>

      
      {/* <div className="button-group">
        <button className="add-to-cart">Add to Cart</button>
        <button className="buy-now">Buy Now</button>
      </div> */}
    </div>
  );
}
