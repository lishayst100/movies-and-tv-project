
import './MovieDetails.scss'

type PosterType = {
  poster_path: string;
};


const PosterImg = ({ poster_path }: PosterType) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      className="img-fluid img-poster rounded-3"
      alt={poster_path}
      onError={({ currentTarget }) => {
        currentTarget.src =
          "https://moviea.vercel.app/assets/no-poster-af8294eb.png";
      }}
    />
  );
};

export default PosterImg