import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (
    <header className="absolute top-0 left-0 w-full px-8 py-4 flex items-center justify-between z-50 bg-gradient-to-b from-black">
      
      {/* LOGO */}
      <img
        src={LOGO}
        alt="Netflix Logo"
        className="w-40 md:w-44 cursor-pointer"
        onClick={() => navigate("/browse")}
      />

      {/* RIGHT SECTION */}
      {user && (
        <div className="flex items-center gap-4">
          <img
            src={user?.photoURL}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover border border-gray-400"
          />

          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;