import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { OrderService } from './orders.service'

// Cretae Order
const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { ...order } = req.body
  const result = await OrderService.createOrder(order)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  })
})

// GET all orders
const getOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getOrders()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrive successfully',
    data: result,
  })
})

// GET single order by ID
const getOrder = catchAsync(async (req: Request, res: Response) => {
  const orderId = req.params.id
  const result = await OrderService.getOrder(orderId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrive successfully',
    data: result,
  })
})

// Update All fileds of an order
const updateOrder = catchAsync(async (req: Request, res: Response) => {
  const orderId = req.params.id
  const updatedData = req.body
  const result = await OrderService.updateOrder(orderId, updatedData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated successfully',
    data: result,
  })
})

// Update specific fields of an order
const partialUpdateOrder = catchAsync(async (req: Request, res: Response) => {
  const orderId = req.params.id
  const updatedData = req.body
  const result = await OrderService.partialUpdateOrder(orderId, updatedData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Updated successfully',
    data: result,
  })
})

// DELETE an order
const deleteOrder = catchAsync(async (req: Request, res: Response) => {
  const orderId = req.params.id
  const result = await OrderService.deleteOrder(orderId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Deleted successfully',
    data: result,
  })
})

export const OrderController = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  partialUpdateOrder,
  deleteOrder,
}
