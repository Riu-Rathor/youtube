import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/slices/appSlice";
const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex items-center gap-2 col-span-2">
        <GiHamburgerMenu className="text-black cursor-pointer" onClick={toggleMenuHandler}/>
        <div className="flex items-center gap-1">
          <IoLogoYoutube className="text-red-600 h-8 w-8" />
          <span className="font-bold text-lg">YouTube</span>
        </div>
      </div>
      <div className="col-span-10">
        <input type="text" className="w-1/2 border border-gray-400 rounded-l-full p-1"/>
        <button className="border border-gray-400 p-1 text-center rounded-r-full bg-gray-200 px-4">Search</button>
      </div>
      <div className="col-span-1">
        <FaUserCircle className="text-gray-900 text-2xl" />
      </div>
    </div>
  );
};

export default Header;
