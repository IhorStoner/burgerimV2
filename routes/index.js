const { Router } = require('express');
const apiRouter = Router();
const adminRouter = require('./admin');
const imgRouter = require('./images');
const productsRouter = require('./products');
const orderRouter = require('./order');
const mailRouter = require('./mail');

apiRouter.use('/admin', adminRouter);
apiRouter.use('/images', imgRouter);
apiRouter.use('/products', productsRouter);
apiRouter.use('/order', orderRouter);
apiRouter.use('/mail', mailRouter);

module.exports = apiRouter;