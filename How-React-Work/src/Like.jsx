import { useState } from "react";
import "./like.css";

function Like() {
  const [likes, setLikes] = useState(5); // Initial likes count
  // Handle like button click (increase likes)
  const handleLike = () => {
    setLikes(likes + 1); // Increase likes by 1
    setLikes(likes + 1); // Increase likes by 1
    setLikes(likes + 1); // Increase likes by 1
  };
  // Handle like button click (increase likes)
  const handlePrevLike = () => {
    setLikes((prev) => prev + 1); // Increase likes by 1
    setLikes((prev) => prev + 1); // Increase likes by 1
    setLikes((prev) => prev + 1); // Increase likes by 1
  };

  return (
    <div className="App">
      <h1>Like Counter</h1>
      <div className="like-container">
        <button className="like-button" onClick={handleLike}>
          Like 👍
        </button>
        <button className="like-button" onClick={handlePrevLike}>
          Like prev 👍
        </button>
        <p className="likes-count">Likes: {likes}</p>
      </div>
    </div>
  );
}

export default Like;
