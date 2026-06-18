import {fetchPhotos,fetchVideos,fetchGifs } from '../api/mediaApi'
import {setQuery,setLoading,setError,setResults} from '../redux/features/searchSlice'
import {useSelector, useDispatch} from 'react-redux'

const ResultGrid = () => {
  return (
    <div  >
      <h1 className="text-white" >result</h1>
    </div>
  )
}

export default ResultGrid
