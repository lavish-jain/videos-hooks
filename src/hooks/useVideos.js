import { useState, useEffect } from "react";
import youtubeClient from "../api/youtube";

const useVideos = (defaultSearchText) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchText);
  }, [defaultSearchText]);

  const search = async (searchText) => {
    const response = await youtubeClient.get("/search", {
      params: { q: searchText },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
