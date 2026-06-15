import { fetchPhotos } from "./api/mediaApi"

const App = () => {
  return (
    <div className="h-screen w-full text-white bg-gray-950 text-6xl" >
      <button onClick={()=>{
        fetchPhotos()
      }}
       >Get Photos</button>
    </div>
  )
}

export default App
