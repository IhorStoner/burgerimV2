const { Router } = require('express');
const apiRouter = Router();
const adminRouter = require('./admin');
const imgRouter = require('./images');

apiRouter.use('/admin', adminRouter);
apiRouter.use('/images', imgRouter);

module.exports = apiRouter;