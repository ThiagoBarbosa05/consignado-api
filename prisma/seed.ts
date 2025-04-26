import {hash} from "bcryptjs"
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient({log: ["query", "info", "warn", "error"]});

async function seed() {
//  await prisma.role.createMany({
//     data: [
//       { name: "admin" },
//       { name: "customer" },
//       { name: "seller" }
//     ]
//   })

// await prisma.permission.create({
//   data: {
//     name: "all"
//   }
// })

// await prisma.rolePermission.create({
//   data: {
//     permissionId: "45a7a943-10bb-4f5e-be32-a741d0c73e27",
//     roleId: "841a5b6f-9265-4c2c-b7af-de79179cd360"
//   }
// })

  // const userCreated = await prisma.user.create({
  //   data: {
  //     name: "Admin Teste",
  //     password: await hash("admin123", 6),
  //     email: "admin@teste.com",
  //   }
  // })

  // await prisma.userRole.create({
  //   data: {
  //     userId: userCreated.id,
  //     roleId: "841a5b6f-9265-4c2c-b7af-de79179cd360"
  //   }
  // })
}

seed().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})