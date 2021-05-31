import axios from "axios";
const API_KEY = "AIzaSyCNryAT89fP_TKeJbOdMKN9VEUzr-7cxRc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY,
  },
});
