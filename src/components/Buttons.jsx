import { useState, useEffect } from "react"; // <- note the added import of useState

export default function Buttons() {
  const initial_numLikes = 0;
  const initial_like = true;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  const [like_btn, set_like_btn] = useState(initial_like);

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  // console.log("what are these?", numLikes, set_numLikes);

  const increment = () => {
    // console.log("Clicked number of times:", numLikes);
    set_numLikes(numLikes + 1);
  };

  const decrement = () => {
    // console.log("clicked number of times:", numLikes);
    set_numLikes(numLikes - 1);
  };

  const reset = () => {
    set_numLikes(initial_numLikes);
  };

  const likeThis = () => {
    // console.log(like_btn);
    set_like_btn(!like_btn);
  };

  return (
    <div>
      <p>
        <button className="btn btn-outline-primary m-4" onClick={decrement}>
          Dislike
        </button>
        This post has <b>{numLikes}</b> likes!
        <button className="btn btn-outline-primary m-4" onClick={increment}>
          Like
        </button>
      </p>
      <button className="btn btn-outline-primary m-4 " onClick={reset}>
        Reset
      </button>
      <button className="btn btn-outline-primary m-4" onClick={likeThis}>
        {like_btn ? "Like this" : "You've liked this. Click to unlike"}
      </button>
    </div>
  );
}
