import express from 'express'
import { OrderRoutes } from '../modules/orders/orders.route'

const router = express.Router()

const moduleRoutes = [
  {
    path: '/order',
    route: OrderRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router
