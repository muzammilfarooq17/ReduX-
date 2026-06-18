import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["Photos", "Videos", "GIFs"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex justify-center mt-8">
      <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-full">
        {tabs.map((elem, idx) => (
          <button
            key={idx}
            onClick={() => dispatch(setActiveTabs(elem))}
            className={`px-7 py-3 rounded-full text-base font-medium transition-all duration-200 cursor-pointer ${
              activeTab === elem
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            {elem}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs; 