const { Router } = require('express');
const OrderModel = require('../models/OrderModel');

const orderRouter = Router();


orderRouter.post('/newOrder', async (req, res) => {
  const newOrder = new OrderModel(req.body)

  try {
    await newOrder.save()
    res.status(201).send('success')
  } catch (e) {
    res.status(400).send(e)
  }
  
})


module.exports = orderRouter;