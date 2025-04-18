import jwt from "jsonwebtoken";


export const user = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json({ message: "Unauthorized: No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.status(200).json({ email: decoded.email, id: decoded.id });
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

