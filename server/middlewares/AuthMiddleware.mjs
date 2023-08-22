import User from "../models/UserModel.mjs";
import "../loadEnvironment.mjs";
import jwt from "jsonwebtoken";

const userVerification = async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decodedToken.id);

    if (user) {
      return res.json({
        status: true,
        firstName: user.firstName,
        userId: decodedToken.id.toString(), // Convert _id to string
      });
    } else {
      return res.json({ status: false });
    }
  } catch (err) {
    return res.json({ status: false });
  }
};

export { userVerification };
