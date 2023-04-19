import { prisma } from "../utils/constants"

const fetchLocations = async() => {
    const locations = await prisma.location.findMany(
{        select: {
            id: true,
            name: true,
        }}
    )
    return locations
}

export default fetchLocations