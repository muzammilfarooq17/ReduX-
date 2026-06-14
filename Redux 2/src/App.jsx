import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counterSlice"



const App = () => {
  const dispatch = useDispatch()
  const count =  useSelector((state)=>state.counter.value)
  return (
    <div>
    <h1>{count}</h1>
    <div>
      <button onClick={()=>{
        dispatch(increment())
      }} className="p"  >Increment</button>
      <button  onClick={()=>{
        dispatch(decrement())
      }} className="p" >Decrement </button>
     
    </div>
    </div>
  )
}

export default App
