import React from "react";
import Card from "../Card/Card";

const ShopPage = () => {
  const cardData = [
    {
      imageUrl: "HeartCandle1.png",
      title: "Card 1",
      description: "Description 1",
      price: 10,
    },
    {
      imageUrl: "HeartCandle2.png",
      title: "Card 2",
      description: "Description 2",
      price: 20,
    },
    {
      imageUrl: "SquareCircleAndZigzagCandle.png",
      title: "Card 3",
      description: "Description 3",
      price: 30,
    },
    {
      imageUrl: "SquareCircleCandle1.png",
      title: "Card 4",
      description: "Description 4",
      price: 40,
    },
    {
      imageUrl: "SquareCircleCandle2.png",
      title: "Card 5",
      description: "Description 5",
      price: 50,
    },
    {
      imageUrl: "SquareCircleCandle2.png",
      title: "Card 6",
      description: "Description 6",
      price: 60,
    },
    {
      imageUrl: "HeartCandle1.png",
      title: "Card 7",
      description: "Description 7",
      price: 70,
    },
    {
      imageUrl: "HeartCandle2.png",
      title: "Card 8",
      description: "Description 8",
      price: 80,
    },
    {
      imageUrl: "SquareCircleAndZigzagCandle.png",
      title: "Card 9",
      description: "Description 9",
      price: 90,
    },
    {
      imageUrl: "HeartCandle1.png",
      title: "Card 10",
      description: "Description 10",
      price: 100,
    },
    {
      imageUrl: "SquareCircleCandle2.png",
      title: "Card 11",
      description: "Description 11",
      price: 110,
    },
    {
      imageUrl: "SquareCircleCandle1.png",
      title: "Card 12",
      description: "Description 12",
      price: 120,
    },
  ];

  return (
    <div className="container text-center">
      <div className="row g-2">
        {cardData.map((card, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
