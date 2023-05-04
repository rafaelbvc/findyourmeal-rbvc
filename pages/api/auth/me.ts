import { NextApiRequest, NextApiResponse } from "next";
import {prisma} from "../../../utils/constants";
import jwt from "jsonwebtoken";

export async function middleware(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["autorizathion"] as string;
  const token = bearerToken.split(" ")[1];

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({errorCode: "Unauthorized"})
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
  return res.status(401).json({errorCode: "Unauthorized"})
}


// export const config = {
//   matcher: ["/api/auth/signin"],
// };
