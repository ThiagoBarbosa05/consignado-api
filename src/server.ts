import express from 'express'
import { customerRouter } from './routes/customer-route'
import { userRoute } from './routes/user-route'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", customerRouter)
app.use("/api", userRoute)

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(4000, () => {
  console.log('Server is listening on http://localhost:4000')
})
