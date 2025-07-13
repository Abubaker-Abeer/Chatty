import cloudinary from "../../Utils/cloudinary.js"; 
import User from "../../../DB/models/userModel.js";
 
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!req.file) {
      return res.status(400).json({ message: "Profile image is required" });
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "chat/profilePics",
    });

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResult.secure_url },
      { new: true }
    );

    res.status(200).json({ message: "Profile updated", user: updatedUser });
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
