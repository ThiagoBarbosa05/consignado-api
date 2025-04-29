import express from 'express'
import { customerRouter } from './routes/customer-route'
import { userRoute } from './routes/user-route'
import cors from "cors"
import { dashboardMetricsController } from './controllers/dashboard-metrics'
import { prisma } from './lib/prisma'
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api", customerRouter)
app.use("/api", userRoute)

app.get('/api/metrics', dashboardMetricsController)

app.listen(3000, () => {
  console.log('Server is listening on http://localhost:4000')
})

// Quando o processo receber sinal de encerramento (Ctrl+C ou kill)
process.on('SIGINT', async () => {
  console.log('SIGINT recebido: fechando Prisma...');
  await prisma.$disconnect();
  process.exit(0); // encerra o processo corretamente
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM recebido: fechando Prisma...');
  await prisma.$disconnect();
  process.exit(0);
});