import { fetchGifts, fetchPhotos, fetchVideos } from "./api/mediaApi"

const App = () => {
  return (
    <div className="h-screen p-4 w-full text-white bg-gray-950 text-6xl" >
      <button className="p-6 text-4xl text-pink-300 " onClick={async ()=>{
        const data = await fetchPhotos()

        console.log(data.results);
        
      }}
       >Get Photos</button>
       <br />



       <button className="p-6 text-4xl text-pink-300 " onClick={async ()=>{
        const data = await fetchVideos()

        console.log(data);

        
      }}
       >Get Videos</button>
       <br />
       

       <button className="p-6 text-4xl text-pink-300 " onClick={async ()=>{
        const data = await fetchGifts()

        console.log(data);

        
      }}
       >Get Gifts</button>


    </div>
  )
}

export default App
