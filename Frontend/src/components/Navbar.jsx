import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="fixed top-0 left-0 w-full z-40 
      bg-purple-950 shadow-md"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Title */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <div className="w-9 h-9 flex items-center justify-center bg-purple-700/30 rounded-lg">
            <MessageSquare className="w-5 h-5 text-purple-300" />
          </div>
          <h1 className="text-purple-200 font-semibold text-lg">Chatty</h1>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4">
          <Link
            to="/settings"
            className="flex items-center gap-1 text-purple-300 hover:text-purple-100 transition"
          >
            <Settings className="w-5 h-5" />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-1 text-purple-300 hover:text-purple-100 transition"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
              <button
                onClick={logout}
                className="flex items-center gap-1 text-purple-300 hover:text-purple-100 transition"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
