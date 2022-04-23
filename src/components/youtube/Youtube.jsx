import React from "react";
import YouTube from "react-youtube";
import "./youtube.css";
import OutsideClickHandler from "react-outside-click-handler";

const opts = {
  height: "400",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

function Youtube({ setShowTrailer, showTrailer, movieDetails }) {
  console.log(movieDetails);
  return (
    <div className="youtube-modal">
      {showTrailer.progress ? (
        <div>loading</div>
      ) : (
        <div className="youtube-container">
          <>
            <OutsideClickHandler
              onOutsideClick={() => {
                setShowTrailer({
                  status: false,
                  progress: false,
                  urlData: "",
                  error: false,
                });
              }}
            >
              {!showTrailer.error ? (
                <YouTube videoId={showTrailer.urlData} opts={opts} />
              ) : (
                <div className="error-msg">
                  <div className="error-title">Error</div>
                  <div className="error-desc">
                    Oops, something went wrong. Please try again later.
                  </div>
                </div>
              )}
              <div className="movie-data-container">
                <div className="movie-rating-release">
                  <span className="movie-date">
                    {movieDetails?.first_air_date}
                  </span>
                  <span className="movie-vote">
                    {movieDetails?.vote_average}
                  </span>
                </div>
                <div className="movie-overview-wrapper">
                  <div className="movie-overview">{movieDetails?.overview}</div>
                  <div className="movie-other-data">
                    <div className="movie-extra-data">
                      <span className="movie-data-label">
                        Original language
                      </span>
                      {movieDetails?.original_language}
                    </div>
                    <div className="movie-extra-data">
                      <span className="movie-data-label">Total Votes </span>
                      {movieDetails?.vote_count}
                    </div>
                  </div>
                </div>
              </div>
            </OutsideClickHandler>
          </>
        </div>
      )}
    </div>
  );
}

export default Youtube;
