import { prisma } from "../config";

export const getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        select: {
            id: true,
            password: true,
            first_name: true,
            last_name: true,
            img_src: true,
        },
        where: {
            email,
        },
    });
};
