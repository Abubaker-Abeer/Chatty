import { useState } from "react";
import { Users } from "lucide-react";

const mockUsers = [
  {
    _id: "1",
    fullName: "Abeer Abubaker",
    profilePic: "/avatar.png",
    isOnline: true,
  },
  {
    _id: "2",
    fullName: "Mohammad Salem",
    profilePic: "/avatar.png",
    isOnline: false,
  },
  {
    _id: "3",
    fullName: "Sara Khaled",
    profilePic: "/avatar.png",
    isOnline: true,
  },
];

const Sidebar = () => {
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const filteredUsers = showOnlineOnly
    ? mockUsers.filter((user) => user.isOnline)
    : mockUsers;

  return (
<aside className="h-full w-20 lg:w-72 bg-purple-700 border-r border-purple-600 flex flex-col transition-all duration-200">
      <div className="border-b border-purple-700 px-4 py-5">
        <div className="flex items-center gap-3">
          <Users className="text-white size-5" />
          <h2 className="text-lg font-semibold text-white hidden lg:block">Contacts</h2>
        </div>

        {/* Online toggle */}
        <div className="mt-4 hidden lg:flex items-center gap-2">
          <input
            type="checkbox"
            checked={showOnlineOnly}
            onChange={(e) => setShowOnlineOnly(e.target.checked)}
            className="toggle toggle-sm toggle-success"
          />
          <span className="text-sm text-white">Online only</span>
          <span className="text-xs text-purple-300">
            ({mockUsers.filter((u) => u.isOnline).length} online)
          </span>
        </div>
      </div>

      <div className="overflow-y-auto flex-1 px-2 py-3">
        {filteredUsers.length === 0 ? (
          <p className="text-center text-purple-300">No users found</p>
        ) : (
          filteredUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUserId(user._id)}
              className={`group w-full flex items-center gap-4 p-3 rounded-lg mb-2 hover:bg-purple-800 transition ${
                selectedUserId === user._id ? "bg-purple-800 ring-2 ring-indigo-400" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={user.profilePic}
                  alt={user.fullName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {user.isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-purple-900"></span>
                )}
              </div>

              <div className="hidden lg:block text-left overflow-hidden">
                <p className="text-white font-medium truncate">{user.fullName}</p>
                <p className="text-xs text-purple-300">
                  {user.isOnline ? "Online" : "Offline"}
                </p>
              </div>
            </button>
          ))
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
