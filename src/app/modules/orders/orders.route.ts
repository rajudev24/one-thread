import express from 'express'
import { OrderController } from './orders.controller'
import validateRequest from '../../middlewares/validateRequest'
import { OrderDataValidation } from './orders.validation'

const router = express.Router()

router.post(
  '/create-order',
  validateRequest(OrderDataValidation.createOrderZodSchema),
  OrderController.createOrder,
)

router.get('/get-orders', OrderController.getOrders)

router.get('/order/:id', OrderController.getOrder)

router.put(
  '/order/:id',
  validateRequest(OrderDataValidation.updateOrderZodSchema),
  OrderController.updateOrder,
)

router.patch(
  '/order/:id',
  validateRequest(OrderDataValidation.partialUpdateOrderZodSchema),
  OrderController.partialUpdateOrder,
)

router.delete('/order/:id', OrderController.deleteOrder)

export const OrderRoutes = router
