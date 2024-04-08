import httpStatus from 'http-status'
import { Order } from './orders.model'
import { IOrder } from './orders.interface'
import ApiError from '../../../errors/ApiError'

const createOrder = async (payload: IOrder): Promise<IOrder> => {
  const result = await Order.create(payload)
  return result
}

const getOrders = async (): Promise<IOrder[]> => {
  const result = await Order.find()
  return result
}

const getOrder = async (orderId: string): Promise<IOrder | null> => {
  const result = await Order.findById(orderId)
  if (!result) throw new ApiError(httpStatus.NOT_FOUND, 'Order Not Found')
  return result
}

const updateOrder = async (
  orderId: string,
  updatedData: IOrder,
): Promise<IOrder | null> => {
  const result = await Order.findByIdAndUpdate(orderId, updatedData, {
    new: true,
  })
  return result
}

const partialUpdateOrder = async (
  orderId: string,
  updatedData: Partial<IOrder>,
): Promise<IOrder | null> => {
  const findOrder = await Order.findById(orderId)
  if (!findOrder) throw new ApiError(httpStatus.NOT_FOUND, 'Order Not Found')
  const result = await Order.findByIdAndUpdate(orderId, updatedData, {
    new: true,
  })
  return result
}

const deleteOrder = async (orderId: string): Promise<IOrder | null> => {
  const result = await Order.findByIdAndDelete(orderId)
  if (!result) throw new ApiError(httpStatus.NOT_FOUND, 'Order Not Found')
  return result
}

export const OrderService = {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
  partialUpdateOrder,
  deleteOrder,
}
