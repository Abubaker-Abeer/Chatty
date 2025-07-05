import { useState } from "react";
import { Camera, Mail, User } from "lucide-react";

const ProfilePage = () => {
  // بيانات وهمية بدل authUser مؤقتًا
  const authUser = {
    fullName: "Abir Abubaker",
    email: "abir@example.com",
    profilePic: "",
    createdAt: "2025-01-01",
  };

  const [selectedImg, setSelectedImg] = useState(null);
  const isUpdatingProfile = false;

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
    };
  };

  return (
    <div className="min-h-screen pt-20 bg-purple-950 text-white">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-purple-700 rounded-xl p-6 space-y-8 shadow-xl">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2 text-purple-200">Your profile information</p>
          </div>

          {/* صورة البروفايل */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImg || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4 border-white"
              />
              <label
                htmlFor="avatar-upload"
                className={`absolute bottom-0 right-0 bg-black/60 hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200 ${
                  isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
                }`}
              >
                <Camera className="w-5 h-5 text-white" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
            <p className="text-sm text-purple-200">
              {isUpdatingProfile
                ? "Uploading..."
                : "Click the camera icon to update your photo"}
            </p>
          </div>

          {/* البيانات */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-purple-200 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-purple-600 rounded-lg border border-purple-400">
                {authUser?.fullName}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-purple-200 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </div>
              <p className="px-4 py-2.5 bg-purple-600 rounded-lg border border-purple-400">
                {authUser?.email}
              </p>
            </div>
          </div>

          {/* معلومات الحساب */}
          <div className="mt-6 bg-purple-800 rounded-xl p-6 border border-purple-500">
            <h2 className="text-lg font-medium mb-4 text-white">
              Account Information
            </h2>
            <div className="space-y-3 text-sm text-purple-200">
              <div className="flex items-center justify-between py-2 border-b border-purple-500">
                <span>Member Since</span>
                <span>{authUser.createdAt}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-400 font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
