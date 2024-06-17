export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "api_key=a89312570d60a3a704e63947bc7bce96";
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


