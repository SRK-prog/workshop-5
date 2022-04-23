import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./banner.css";
import { fetchPost } from "../../redux/actions";

const Banner = ({ fetchPost, post }) => {
  useEffect(() => {
    const Random = Math.floor(Math.random() * 500);
    const URL = `/movie/${Random}?api_key=02684aad9559f0e07b9211530fb7f2c8`;
    fetchPost(URL);
  }, [fetchPost]);

  const bannnerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(https://image.tmdb.org/t/p/original/${post?.backdrop_path})`,
  };

  return (
    <section style={bannnerStyle} className="banner">
      <div>
        <div className="description">
          <h1 className="header-title">{post?.title}</h1>
          <button className="Btn">Play</button>
          <button className="Btn">My list</button>
          <div className="desc"> {post?.overview}</div>
        </div>
        <span className="dark_bottom"></span>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { post: state.post };
};

export default connect(mapStateToProps, { fetchPost })(Banner);
