import {hash} from "bcryptjs"
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient({log: ["query", "info", "warn", "error"]});

async function seed() {
//  await prisma.role.createMany({
//     data: [
//       { name: "administrador" },
//       { name: "vendedor" },
//       { name: "cliente" }
//     ]
//   })

// await prisma.permission.create({
//   data: {
//     name: "all",
//     description: "Todas as permissões"
//   }
// })

// await prisma.rolePermission.create({
//   data: {
//     permissionId: "cf530c4b-d999-48d9-ade5-aed2e8e3ec00",
//     roleId: "fe7d118e-876e-4805-a43c-8c8c3d06128b"
//   }
// })

  // const userCreated = await prisma.user.create({
  //   data: {
  //     name: "Admin Teste",
  //     password: await hash("admin123", 6),
  //     email: "admin@teste.com",
  //   }
  // })

  // await prisma.permission.createMany({
  //   data: [
  //     { 
  //       name: "read:metrics",
  //       description: "Visualizar métricas no dashboard"
  //     },
  //     {
  //       name: "read:customers",
  //       description: "Visualizar clientes"
  //     },
  //     {
  //       name: "create:customers",
  //       description: "Criar novos clientes"
  //     },
  //     {
  //       name: "update:customers",
  //       description: "Atualizar dados dos clientes"
  //     },
  //     {
  //       name: "delete:customers",
  //       description: "Excluir clientes"
  //     },
  //     {
  //       name: "read:users",
  //       description: "Visualizar usuários"
  //     },
  //     {
  //       name: "create:users",
  //       description: "Criar novos usuários"
  //     },
  //     {
  //       name: "update:users",
  //       description: "Atualizar dados dos usuários"
  //     },
  //     {
  //       name: "delete:users",
  //       description: "Excluir usuários"
  //     },
    
  //     {
  //       name: "read:consigned",
  //       description: "Visualizar vendas consignadas"
  //     },
  //     {
  //       name: "create:consigned",
  //       description: "Criar novas vendas consignadas"
  //     },
  //     {
  //       name: "update:consigned",
  //       description: "Atualizar dados das vendas consignadas"
  //     },
  //     {
  //       name: "delete:consigned",
  //       description: "Excluir vendas consignadas"
  //     },
  //     {
  //       name: "read:wines",
  //       description: "Visualizar vinhos"
  //     },
  //     {
  //       name: "create:wines",
  //       description: "Criar novos vinhos"
  //     },
  //     {
  //       name: "update:wines",
  //       description: "Atualizar dados dos vinhos"
  //     },
  //     {
  //       name: "delete:wines",
  //       description: "Excluir vinhos"
  //     }
  //   ]
  // })

  // await prisma.rolePermission.create({
  //   data: {
  //     permissionId: "95b0aece-c667-42fa-af30-cbb4f4d8422d",
  //     roleId: "f640a066-8466-4132-b2ac-78cc70b2aa5c"
  //   }
  // })

  await prisma.userRole.create({
    data: {
      userId: "ae84c314-7421-44e8-9903-7a5af1e1d675",
      roleId: "fe7d118e-876e-4805-a43c-8c8c3d06128b"
    }
  })
}

seed().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})