import {  Search } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {setQuery }from "..//redux/features/searchSlice"


const SearchBar = () => {
  const [text, setText] = useState('')
 const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(text))
          setText('')
    
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <div className="relative w-full">
        <input
        value={text}
        onChange={(e)=>{
          setText(e.target.value  )
          

        }}
          required
          type="text"
          placeholder="Search anything ..."
          className="w-full border border-gray-300 rounded-lg px-3 py-1 pr-9 pt-0outline-none"
        />

        <button
          type="submit"
          className="active:scale-95 absolute right-4 top-1/2 -translate-y-1/2"
        >
          <Search size={35} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;