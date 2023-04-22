import { prisma } from "../../utils/constants"

export const fetchCuisines = async() => {
    const cuisines = await prisma.cuisine.findMany()
    return cuisines
}

