import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./banner.css";
import { fetchPost } from "../../redux/actions";

const Banner = ({ fetchPost, post }) => {
  const Random = Math.floor(Math.random() * 500);
  const URL = `/movie/${Random}?api_key=02684aad9559f0e07b9211530fb7f2c8`;

  useEffect(() => {
    fetchPost(URL);
  });

  return (
    <div className="banner">
      <img
        className="bannerImage"
        src={"https://image.tmdb.org/t/p/original/" + post.backdrop_path}
        alt=""
      />
      <div className="description">
        <div className="desc"> {post.overview}</div>
        <button className="Btn">Play</button>
        <button className="Btn">My list</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { post: state.post };
};

export default connect(mapStateToProps, { fetchPost })(Banner);
