import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allpost from "./components/pages/Allpost";
import Addpost from "./components/pages/Addpost";
import { useState } from "react";
import Detailpage from "./components/DetailsPage/Detailpage";

function App() {
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postImg, setPostImg] = useState(null);
  const [allpostData, setAllPostData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (postTitle && postDescription && postImg) {
      const newPost = {
        id: Math.floor(Math.random() * 10000),
        title: postTitle,
        description: postDescription,
        image: postImg,
      };

      handlePostData(newPost);
      setPostTitle("");
      setPostDescription("");
      setPostImg(null);
    } else {
      alert("Please fill in all fields");
    }
  };

  const handlePostData = (newPost) => {
    setAllPostData([...allpostData, newPost]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={<Allpost allpostData={allpostData} />}
          />
          <Route
            path="/addpost"
            element={
              <Addpost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                postDescription={postDescription}
                setPostTitle={setPostTitle}
                setPostDescription={setPostDescription}
                setPostImg={setPostImg}
              />
            }
          />
          <Route
            path="/detailspage/:id"
            element={<Detailpage postData={allpostData} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
