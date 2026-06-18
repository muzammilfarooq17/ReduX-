import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;


// UNSPLASH API INTEGRATION
export async function fetchPhotos(query="dog",page=1, per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });

  // console.log(res);
  return res.data;
  
}

// PEXELS API INTEGRATION


export async function fetchVideos(query = "virat kholi", per_page = 15){
  const res = await axios.get("https://api.pexels.com/v1/videos/search",{
    params:{query,per_page},
    headers:{Authorization:PEXELS_KEY},
  })
  // console.log(res);
  
  return res.data.videos;
}



// GIPHY API INTEGRATION
export async function fetchGifs(query ="sad", limit = 15, offset = 0){
  const res = await axios.get("https://api.giphy.com/v1/gifs/search",{
    params:{api_key:GIPHY_KEY,
      q:query,
      limit,
      offset,
    },

  })
  return res.data.data;
}


