import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../../config/index.config.js";

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "3h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

export default { generateToken, verifyToken };
