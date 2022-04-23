import RowItems from "./RowItems";
import Youtube from "../youtube/Youtube";
import Urls from "../../apis/Urls";
import { useSelector } from "react-redux";
import movieTrailer from "movie-trailer";
import { useEffect, useState } from "react";

const Card = () => {
  const trailerData = useSelector((state) => state.trailer);
  const [showTrailer, setShowTrailer] = useState({
    status: false,
    progress: false,
    urlData: "",
    error: false,
  });

  useEffect(() => {
    if (trailerData.id) {
      trailerHandler(trailerData?.name);
    }
  }, [trailerData.id, trailerData?.name]);

  const trailerHandler = (name) => {
    setShowTrailer({
      status: true,
      progress: true,
      urlData: "",
      error: false,
    });
    movieTrailer(name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        console.log(urlParams.get("v"));
        setShowTrailer({
          status: true,
          progress: false,
          urlData: urlParams.get("v"),
          error: false,
        });
      })
      .catch((error) => {
        setShowTrailer({
          status: true,
          progress: false,
          urlData: "",
          error: true,
        });
        console.log(error);
      });
  };

  return (
    <>
      <div className="card-container">
        <RowItems
          url={Urls.fetchNetflixOriginals}
          isLarge
          title={"Netflix Originals"}
        />
        <RowItems url={Urls.fetchtrending} title={"Trending"} />
        <RowItems url={Urls.fetchTopRated} title={"Top Rated"} />
        <RowItems url={Urls.fetchActionMovies} title={"Action Movies"} />
        <RowItems url={Urls.fetchComedyMovies} title={"Comedy"} />
        <RowItems url={Urls.fetchHorrorMovies} title={"Horror"} />
        <RowItems url={Urls.fetchRomanceMovies} title={"Romance"} />
        <RowItems url={Urls.fetchDocumentaries} title={"Documentaries"} />
      </div>
      {showTrailer.status && (
        <Youtube
          showTrailer={showTrailer}
          setShowTrailer={setShowTrailer}
          movieDetails={trailerData}
        />
      )}
    </>
  );
};

export default Card;
