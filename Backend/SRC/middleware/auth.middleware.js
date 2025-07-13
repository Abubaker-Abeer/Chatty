import jwt from "jsonwebtoken";
import User from "../../DB/models/userModel.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization?.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authorization.split("Bearer ")[1];
    const decoded = jwt.verify(token, process.env.LOGIN_SIGN);

    console.log("Decoded ID:", decoded.id); // اطبعي الـ ID

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Auth error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
