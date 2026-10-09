import mongoose from "mongoose";
import argon2 from "argon2";
import  jwt  from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.generateToken = function () {
  return jwt.sign(
    {
      userId: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    },

    process.env.JWT_SECRET_KEY,
    { expiresIn: "8h" },
  );
};



userSchema.pre("save", async function () {
  const user = this;

  if (!user.isModified("password")) return;
  try {
    const hashed_password = await argon2.hash(user.password);
    user.password = hashed_password;
  } catch (error) {
    console.error("Password not hashed");
    next(error);
  }
});

userSchema.methods.comparePassword=async function(password){
    console.log("inside comp pass", this)
    const compare_pass=await argon2.verify(this.password,password)
    if(compare_pass){
        console.log("Password matched")
        return true
    } else {
        console.log("Password not matched")
        return false
    }
}

export const User = mongoose.model("User", userSchema);
