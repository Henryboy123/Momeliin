import React from "react";
interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const Card = ({ imageUrl, title, description, price }: CardProps) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">${price.toFixed(2)}</p>
        <a href="#" className="btn btn-primary">
          Buy
        </a>
      </div>
    </div>
  );
};

export default Card;
