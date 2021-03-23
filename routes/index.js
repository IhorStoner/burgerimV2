const { Router } = require('express');
const apiRouter = Router();
const adminRouter = require('./admin');
const imgRouter = require('./images');
const productsRouter = require('./products');
const orderRouter = require('./order');

apiRouter.use('/admin', adminRouter);
apiRouter.use('/images', imgRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/order', orderRouter);

module.exports = apiRouter;