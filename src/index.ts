import {prisma} from "./database";

async function main() {
    const newUser = {
        data: {
            name: "Mitchel",
            email: "mitchel@wijt.net",
            posts: {
                create: { title: "Hello" }
            },
            profile: {
                create: { bio: "I like turtles" }
            }
        }
    }

    await prisma.user.create(newUser)
    const allUsers = await prisma.user.findMany({
        include: {
            profile: true,
            posts: true
        }
    })
    console.log(allUsers[0].posts)
}

main()