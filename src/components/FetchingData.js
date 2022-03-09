import { useState, useEffect } from "react";
import axios from "axios";

const FetchingData = () => {
  const [data, set_data] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

  const getFacts = async () => {
    const facts = await axios.get(url);

    set_data(facts.data);
  };

  useEffect(() => {
    getFacts();
  }, []);

  return (
    <div>
      {data.map((article, index) => (
        <p key={index}>{article.body}</p>
      ))}
    </div>
  );
};

export default FetchingData;
