import RowItems from "./RowItems";
import Urls from "../../apis/Urls";

const Card = () => {
  return (
    <>
      <RowItems
        url={Urls.fetchNetflixOriginals}
        isLarge
        title={"Netflix Originals"}
      />
      <RowItems url={Urls.fetchtrending} title={"Trending"} />
      {/* <RowItems url={Urls.fetchTopRated} title={"Top Rated"} />
      <RowItems url={Urls.fetchActionMovies} title={"Action Movies"} />
      <RowItems url={Urls.fetchComedyMovies} title={"Comedy"} />
      <RowItems url={Urls.fetchHorrorMovies} title={"Horror"} />
      <RowItems url={Urls.fetchRomanceMovies} title={"Romance"} />
      <RowItems url={Urls.fetchDocumentaries} title={"Documentaries"} /> */}
    </>
  );
};

export default Card;
