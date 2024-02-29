import React, { useState } from "react";

const Addpost = ({
  handleSubmit,
  postTitle,
  setPostTitle,
  postDescription,
  setPostDescription,
  setPostImg,
}) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setPostImg(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-4 mb-1 font-semibold text-xl">Add Post</h1>
      <div className="w-10 h-1 bg-blue-600 m-auto rounded-lg"></div>
      <div className="md:p-10">
        <div className="md:w-96 w-80 m-auto shadow-md md:p-5 p-8 rounded-md">
          <form onSubmit={handleSubmit}>
            <input
              value={postTitle}
              onChange={(event) => setPostTitle(event.target.value)}
              type="text"
              placeholder="Your title..."
              className="p-3 w-full bg-slate-200 outline-blue-400 rounded-md mb-5"
            />
            <textarea
              value={postDescription}
              onChange={(event) => setPostDescription(event.target.value)}
              cols="3"
              rows="3"
              placeholder="Your description..."
              className="p-3 w-full bg-slate-200 outline-blue-400 rounded-md mb-5"
            />

            <div className="flex  items-center justify-between">
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-red-600 hover:bg-red-700 text-white p-3 px-6 md:text-base text-sm rounded-md"
              >
                Upload Image
              </label>
              {image && (
                <img
                  src={image}
                  alt="Uploaded"
                  className="md:w-32 w-20 rounded-md ml-5"
                />
              )}
            </div>

            <div className="mt-14">
              <button
                type="submit"
                className="p-3 w-full px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addpost;
