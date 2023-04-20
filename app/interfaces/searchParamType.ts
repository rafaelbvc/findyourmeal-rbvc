import { PRICE } from "@prisma/client";

export interface SearchParamType {
  city?: string | undefined,
  cuisine?: string | undefined,
  price?: PRICE,
};
