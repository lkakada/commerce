const catchAllRouter = require('./catch-all.routes');

const router = require('express').Router();
const api = require('express').Router();

const productRouter = require('./product.route');
router.use('/product', productRouter);

module.exports = api.use('/api', router).use(catchAllRouter);