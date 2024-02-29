import React from "react";
import Card from "../card/Card";

const Allpost = ({ allpostData }) => {
  return (
    <div>
      <h1 className="text-center mt-4 mb-1 font-semibold text-xl">Posts</h1>
      <div className="w-10 h-1 bg-blue-600 m-auto rounded-lg"></div>
      <div className="md:p-10 md:mt-2 mt-10">
        {allpostData.length === 0 ? (
          <p className="text-center text-xl mt-28 font-bold">No Post</p>
        ) : (
          <Card allpostData={allpostData} />
        )}
      </div>
    </div>
  );
};

export default Allpost;
