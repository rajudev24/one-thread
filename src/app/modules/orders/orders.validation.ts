import { z } from 'zod'

const createOrderZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'User ID is required',
    }),
    productId: z.string({
      required_error: 'Product ID is required',
    }),
    productQuantities: z.number({
      required_error: 'Product Quantities is required',
    }),
    totalAmount: z.number({
      required_error: 'Total Amount is required',
    }),
    payerName: z.string({
      required_error: 'Payer Name is required',
    }),
  }),
})

const updateOrderZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'User ID is required',
    }),
    productId: z.string({
      required_error: 'Product ID is required',
    }),
    productQuantities: z.number({
      required_error: 'Product Quantities is required',
    }),
    totalAmount: z.number({
      required_error: 'Total Amount is required',
    }),
    payerName: z.string({
      required_error: 'Payer Name is required',
    }),
  }),
})
const partialUpdateOrderZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'User ID is required',
    }),
    productId: z.string({
      required_error: 'Product ID is required',
    }),
    productQuantities: z.number().optional(),
    totalAmount: z.number().optional(),
    payerName: z.string().optional(),
  }),
})

export const OrderDataValidation = {
  createOrderZodSchema,
  updateOrderZodSchema,
  partialUpdateOrderZodSchema,
}
