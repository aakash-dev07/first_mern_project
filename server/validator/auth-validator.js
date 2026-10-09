import { string, z } from "zod";

export const signUpSchema = z.object({
  username: string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(33, { max: "Name can't be more than 33 characters" }),
  email: string({ required_error: "Name is required" })
    .trim()
    .min(4, { message: "Email must be at least 3 characters" })
    .max(33, { max: "Email can't be more than 33 characters" }),
  password: string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Password must be at least 3 characters" })
    .max(33, { max: "Password can't be more than 33 characters" }),
  phone: string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Phone must be at least 3 characters" })
    .max(33, { max: "Phone can't be more than 33 characters" }),
});
