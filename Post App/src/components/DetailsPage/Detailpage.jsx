import React from "react";
import { useParams } from "react-router-dom";

const Detailpage = ({ postData }) => {
  const { id } = useParams();
  const post = postData.find((post) => post.id === parseInt(id));

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-bold ">
        No Post found
      </div>
    );
  }

  return (
    <div className="md:p-10 mt-5">
      <div className="md:w-[800px] w-80 m-auto">
        <img
          src={post.image}
          alt="post img"
          className="w-full rounded-md mb-2"
        />
        <div className="p-5">
          <h1 className="font-bold text-xl mb-1">{post.title}</h1>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
