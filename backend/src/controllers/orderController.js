import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

//@desc Add new order
//@route POST /api/orders
//@access Private
export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});
//@desc Get order by ID
//@route GET api/orders/:id
//@access Private
export const getOrderById = asyncHandler(async (req, res) => {});
//@desc Update order to paid
//@route PUT api/orders/:id/pay
//@access Private
export const updateOrderToPaid = asyncHandler(async (req, res) => {});
//@desc Update order to delivered
//@route PUT api/orders/:id/deliver
//@access Private/Admin
export const updateOrderToDelivered = asyncHandler(async (req, res) => {});
//@desc Get logged in user orders
//@route GET api/orders/myorders
//@access Private
export const getMyOrders = asyncHandler(async (req, res) => {});
//@desc Get all orders
//@route GET api/orders
//@access Private/Admin
export const getOrders = asyncHandler(async (req, res) => {});