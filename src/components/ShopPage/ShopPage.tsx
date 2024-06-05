import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Shared/Pagination/Pagination";
import "./ShopPage.scss";
import FiltersBar from "../Shared/FiltersBar/FiltersBar";

interface DataProps {
  imageUrls: string[];
  title: string;
  description: string;
  price: number;
}

const dataFilled: DataProps[] = [
  {
    imageUrls: [
      "HeartCandle1.png",
      "HeartCandle2.png",
      "SquareCircleAndZigzagCandle.png",
    ],
    title: "Card 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 1",
    price: 10,
  },
  {
    imageUrls: ["HeartCandle1.png", "HeartCandle2.png"],
    title: "Card 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 2",
    price: 20,
  },
  {
    imageUrls: ["SquareCircleAndZigzagCandle.png"],
    title: "Card 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 3",
    price: 30,
  },
  {
    imageUrls: ["SquareCircleCandle1.png", "SquareCircleCandle2.png"],
    title: "Card 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 4",
    price: 40,
  },
  {
    imageUrls: ["SquareCircleCandle2.png", "SquareCircleCandle1.png"],
    title: "Card 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 5",
    price: 50,
  },
  {
    imageUrls: ["SquareCircleCandle1.png", "SquareCircleCandle2.png"],
    title: "Card 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 6",
    price: 60,
  },
  {
    imageUrls: ["HeartCandle1.png", "HeartCandle2.png"],
    title: "Card 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 7",
    price: 70,
  },
  {
    imageUrls: ["HeartCandle1.png", "HeartCandle2.png"],
    title: "Card 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 8",
    price: 80,
  },
  {
    imageUrls: ["SquareCircleAndZigzagCandle.png"],
    title: "Card 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 9",
    price: 90,
  },
  {
    imageUrls: ["HeartCandle1.png", "HeartCandle2.png"],
    title: "Card 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 10",
    price: 100,
  },
  {
    imageUrls: ["SquareCircleCandle2.png", "SquareCircleCandle1.png"],
    title: "Card 11",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 11",
    price: 110,
  },
  {
    imageUrls: ["SquareCircleCandle1.png", "SquareCircleCandle2.png"],
    title: "Card 12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam. 12",
    price: 120,
  },
];

const dummyData: DataProps[] = [
  {
    imageUrls: [],
    title: "Loading...",
    description: "",
    price: 0,
  },
  {
    imageUrls: [],
    title: "Loading...",
    description: "",
    price: 0,
  },
  {
    imageUrls: [],
    title: "Loading...",
    description: "",
    price: 0,
  },
  {
    imageUrls: [],
    title: "Loading...",
    description: "",
    price: 0,
  },
];

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<DataProps[]>(dummyData);
  const [loading, setLoading] = useState(true);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const itemsPerPage = 4;

  useEffect(() => {
    setTimeout(() => {
      setData(dataFilled);
      setLoading(false);
    }, 500);
  }, []);

  const handlePageChange = (page: number) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 500);
  };

  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <FiltersBar onFiltersToggle={toggleFilters} />
      <div className="d-flex justify-content-center mt-3">
        <div className="container text-center m-0 p-0">
          <div className="d-flex justify-content-center align-items-center gap-5">
            <div
              className={`filters ${
                isFiltersVisible ? "on-screen" : "out-of-screen-left"
              }`}
            >
              <nav className="nav flex-column w-200">
                <h2>Filters</h2>
                <hr />
                <a className="nav-link" href="#">
                  Filter 1
                </a>
                <a className="nav-link" href="#">
                  Filter 2
                </a>
                <a className="nav-link disabled" aria-disabled="true">
                  Filter 3
                </a>
              </nav>
            </div>
            {currentItems.map((card, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4">
                <Card {...card} isLoading={loading} />
              </div>
            ))}
          </div>
          <Pagination
            totalPages={Math.ceil(data.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
