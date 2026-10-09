import  jwt  from "jsonwebtoken";
import { User } from "../model/auth-model.js";




export const userVerify = async (req, res, next) => {
  try {
    // 1. ब्राउज़र की कुकीज़ में से 'token' नाम की कुकी निकालें
    const token = req.cookies.token; 

    // 2. अगर टोकन नहीं मिला, तो यूज़र लॉग्ड-इन नहीं है
    if (!token) {
      return res.status(401).json({ msg: "Access Denied: No Token Provided. Please Login." });
    }

    // 3. टोकन को अपनी Secret Key से वेरिफाई करें
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // 4. डेटाबेस से उस यूज़र की डिटेल्स निकालें (बिना पासवर्ड के)
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // 5. 🌟 सबसे जादुई लाइन: यूज़र का डेटा 'req.user' में सेव कर दें
    req.user = user; 

    next(); // अगले फ़ंक्शन (Route Handler) पर जाने की अनुमति दें
  } catch (error) {
    console.error("Auth Error:", error);
    res.status(401).json({ msg: "Invalid or Expired Token" });
  }
};
