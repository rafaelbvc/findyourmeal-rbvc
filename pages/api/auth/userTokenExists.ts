import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import { prisma } from "../../../utils/constants";

export default async function UserTokenExists(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["autorization"] as string;
  if (!bearerToken) {
    res.status(401).json({
      errorMessage: "Unauthorized request",
    });
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      errorMessage: "Unauthorized request",
    });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return res.status(401).json({
      errorMessage: "Unauthorized request",
    });
  }

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({ errorMessage: "Unautorized resquest" });
  }

  const user = await prisma.user.findUnique({
    where: { email: payload.email },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      city: true,
      email: true,
      phone: true,
    },
  });
  return res.json({ user });
}
