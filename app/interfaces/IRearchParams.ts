import { PRICE } from "@prisma/client";

export interface ISearchParams {
  city?: string | undefined;
  cuisine?: string | undefined;
  price?: PRICE;
}
