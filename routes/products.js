const { Router } = require('express');
const ProductModel = require('../models/ProductModel');

const productsRouter = Router();

productsRouter.get('/:page', async (req, res) => {
  const page = req.params.page || 1;
  const pagesize = 10;

  const products = await ProductModel.aggregate([{ $skip: ((page || 1) - 1) * pagesize }, { $limit: pagesize }])

  let pages = null;

  if (products.length) {
    const count = await ProductModel.aggregate([{ $count: 'products' }])

    pages = Math.ceil((Number(count[0].products) / Number(pagesize)))
    res.status(201).send([products, pages])
  } else {
    res.status(400).send('products not found')
  }
})


productsRouter.get('/categories/:name', async (req, res) => {
  const name = req.params.name;
  const products = await ProductModel.find({ category: name })

  if (products.length) {
    res.status(201).send(products)
  } else {
    res.status(400).send('products not found')
  }
})


productsRouter.put('/update/:id', async (req, res) => {
  const id = req.params.id
  const updateProduct = await ProductModel.findByIdAndUpdate(id, req.body)
  res.status(201).send(updateProduct)
})

productsRouter.put('/view/:id', async (req, res) => {
  const id = req.params.id
  const { view } = req.body

  const updateProduct = await ProductModel.findByIdAndUpdate(id, { view: view })
  res.status(201).send(updateProduct)
})


productsRouter.post('/newProduct', async (req, res) => {
  const newProduct = new ProductModel(req.body)

  try {
    await newProduct.save()
    res.status(201).send('success')
  } catch (e) {
    res.status(400).send(e)
  }
})


productsRouter.delete('/:id', async (req, res) => {
  const id = req.params.id

  try {
    await ProductModel.findByIdAndDelete(id)
    res.status(201).send('success')
  } catch (e) {
    res.status(400).send(e)
  }
})

productsRouter.get('/categories/:name', async (req, res) => {
  const name = req.params.name;
  const products = await ProductModel.find({ category: name })
  if (products.length) {
    res.status(201).send(products)
  } else {
    res.status(400).send('products not found')
  }
})


module.exports = productsRouter;