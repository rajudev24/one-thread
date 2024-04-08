import mongoose, { Model } from 'mongoose'

export type IOrder = {
  _id: mongoose.ObjectId
  userId: string
  productId: string
  productQuantities: number
  totalAmount: number
  payerName: string
}

export type OrderModel = Model<IOrder>
