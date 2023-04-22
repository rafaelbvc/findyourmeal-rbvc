// import { ReviewsByRestaurantType } from "../interfaces/reviewsByRestaurantType";
// import { prisma } from "../utils/constants";

// export const fetchReviewsByRestaurant = async (
//     restaurants: string,
//   ): Promise<ReviewsByRestaurantType[]> => {
//     const reviews = await prisma.review.findMany({
//       where: {
//         restaurant: {
//           name: {
//             equals: restaurants,
//           }
//         },
//       },
//       select: {
//         id: true,
//         first_name: true,
//         last_name: true,
//         text: true,
//         rating: true,
//         restaurant: true,
//         user: true,
//       },
//     });
  
//     if (!restaurants) {
//       throw new Error("null");
//     }
  
//     return reviews;
//   };