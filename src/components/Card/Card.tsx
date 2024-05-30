import React from "react";
interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  isLoading: boolean;
}

const Card = ({ imageUrl, title, description, price, isLoading }: CardProps) => {
  if (isLoading) {
    return (
      <div className="card" aria-hidden="true" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="Loading..." />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            className="btn btn-primary disabled placeholder col-3"
            aria-disabled="true"
          ></a>
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">${price?.toFixed(2)}</p>
        <a href="#" className="btn btn-primary">
          Buy
        </a>
      </div>
    </div>
  );
};

export default Card;
