import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GPTSlice";
import { Supported_GPT_Languages } from "../utils/constants";
import { changeLnguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user; 
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);
  const handleGPT = () => {
    dispatch(toggleGptSearchView());
  }
  const onHandleLanguegeChange = (e) => {
    dispatch(changeLnguage(e.target.value));
  }

  return (
    <header className="fixed top-0 left-0 w-full px-3 sm:px-6 md:px-8 py-2 sm:py-4 flex items-center justify-between z-50 bg-gradient-to-b from-black">
      
  {/* LOGO */}
  <img
    src={LOGO}
    alt="Netflix Logo"
    className="w-32 sm:w-40 md:w-52 cursor-pointer"
    onClick={() => navigate("/browse")}
  />

  {/* RIGHT SECTION */}
  {user && (
    <div className="flex items-center gap-2 sm:gap-4">
      
      {/* Language Selector */}
      {showGptSearch && (
        <select
          className="bg-gray-800 text-white px-2 py-1 rounded-md text-xs sm:text-sm font-semibold"
          onChange={onHandleLanguegeChange}
        >
          {Supported_GPT_Languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      )}

      {/* GPT / Home Button */}
      <button
        className="bg-gradient-to-r from-gray-900 to-violet-900 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-semibold transition whitespace-nowrap"
        onClick={handleGPT}
      >
        {showGptSearch ? "🏠︎" : "GPT Search"}
      </button>

      {/* Avatar */}
      <img
        src={user?.photoURL}
        alt="profile"
        className="hidden sm:block w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-400"
      />

      {/* Sign Out */}
      <button
        onClick={handleSignOut}
        className="bg-gradient-to-r from-gray-900 to-violet-900 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-semibold transition whitespace-nowrap"
      >
        Sign Out
      </button>
    </div>
  )}
</header>

  );
};

export default Header;