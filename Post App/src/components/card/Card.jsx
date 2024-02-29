import React from "react";
import { Link } from "react-router-dom";

const Card = ({ allpostData }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {allpostData.map((item) => {
          return (
            <div
              key={item.id}
              className="w-80 shadow-lg rounded-md overflow-hidden"
            >
              <Link to={`/detailspage/${item.id}`}>
                <div>
                  <img src={item.image} alt="postImg" />
                  <div className="p-3">
                    <h1 className="font-semibold mb-2">{item.title} </h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
