const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const OrdersController = require('../controller/orders');

router.get('/', checkAuth, OrdersController.orders_get_all);

router.get('/:orderId', checkAuth, OrdersController.orders_get_by_id);

router.post('/', checkAuth, OrdersController.orders_create_order);

router.delete('/:orderId', checkAuth, OrdersController.orders_delete_order);

module.exports = router;