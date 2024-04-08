import { Schema, model } from 'mongoose'
import { IOrder, OrderModel } from './orders.interface'

export const OrderSchema = new Schema<IOrder, OrderModel>(
  {
    userId: {
      type: String,
      required: true,
    },
    productId: {
      type: String,
      required: true,
    },
    productQuantities: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    payerName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Order = model<IOrder, OrderModel>('Order', OrderSchema)
