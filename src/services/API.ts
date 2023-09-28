export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "api_key=b3b1492d3e91e9f9403a2989f3031b0c";
export const urlMovies = `${BASE_URL}/discover/movie?${API_KEY}`;
export const placeHolderPoster = "https://moviea.vercel.app/assets/no-poster-af8294eb.png";
export const placeHolderCast =
  "https://moviea.vercel.app/assets/avatar-bd5ec287.png";


  
export function formatDate(inputDate: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate: string = new Date(inputDate).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
}


