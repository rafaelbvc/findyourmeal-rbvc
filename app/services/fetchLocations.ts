import { prisma } from "../utils/constants"

export const fetchLocations = async() => {
    const locations = await prisma.location.findMany()
    return locations
}

