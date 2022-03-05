import React, { useEffect, useState } from "react";
import "./rows.css";
import BASE_URL from "../../apis/baseUrl";

const RowItems = ({ url, isLarge, title }) => {
  const [posts, setPosts] = useState([]);
  const imageURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await BASE_URL.get(url);
      setPosts(request.data.results);
    }
    fetchData();
  }, [url]);

  return (
    <>
      <h2 style={{ margin: "0 0 10px 10px", color: "white" }}>{title}</h2>
      <div className="rowContainer">
        {posts.map((item) => (
          <div key={item.id}>
            <img
              className={isLarge ? "rowImage" : "rowImage1"}
              src={
                isLarge
                  ? imageURL + item?.poster_path
                  : imageURL + item?.backdrop_path
              }
              alt={item?.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default RowItems;
