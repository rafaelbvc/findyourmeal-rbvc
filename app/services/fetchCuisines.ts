import { prisma } from "../utils/constants"

const fetchCuisines = async() => {
    const locations = await prisma.cuisine.findMany(
{        select: {
            id: true,
            name: true,
        }}
    )
    return locations
}

export default fetchCuisines