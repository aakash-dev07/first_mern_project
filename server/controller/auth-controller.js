import { User } from "../model/auth-model.js";
import { signUpSchema } from "../validator/auth-validator.js";

export const register = async (req, res) => {
  try {
    const result = signUpSchema.safeParse(req.body);

    // console.log(result.error.issues[0])

    if (!result.success) {
      return res.status(400).json({ msg: result.error.issues[0].message });
    }

    const { username, email, password, phone } = result.data;

    const userexist = await User.findOne({ email });

    if (userexist) {
      return res.send({ msg: "Email already exists" });
    }

    const userdata = await User.create({ username, email, password, phone });
    console.log("after created userdata", userdata);

    const token = await userdata.generateToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // localhost पर false
      sameSite: "lax", // localhost के लिए सही
      maxAge: 3600000,
    });
    res.send({
      msg: "Success",
      userData: userdata,
      token: token,
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

// Login functionality here

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userexist = await User.findOne({ email });
    console.log("login userexist", userexist);

    if (!userexist) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const is_match = await userexist.comparePassword(password);
    if (!is_match) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    res.send({
      msg: "Login successfully",
      userId: userexist._id.toString(),
      Token: await userexist.generateToken(),
    });
  } catch (error) {
    console.error("Internal server errror");
  }
};

export const user = (req, res) => {
  try {
    const userData = req.user;
    console.log("User profile", userData);
    console.log("Userdata inside user function", userData);
    if (!userData) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json({ msg: "success", userData });
  } catch (error) {
    console.log("Profile not found ");
  }
};
