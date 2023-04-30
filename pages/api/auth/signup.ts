import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

export default async function AuthHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, city, password } = req.body;

    const errors: string[] = [];

    const validationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage: "Invalid fist name",
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 40,
        }),
        errorMessage: "Invalid last name",
      },
      {
        valid: validator.isEmail(email),
        errorMessage: "Invalid Email",
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: "Invalid Phone",
      },
      {
        valid: validator.isLength(city, { min: 1 }),
        errorMessage: "Invalid Localization",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Please insert a stronger password",
      },
    ];

    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }

    res.status(200).json({
      data: "Success",
    });
  }
}
