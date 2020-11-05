const categoryRouter = require('./routes/category')
const productRouter = require('./routes/product')
const orderRouter=require('./routes/order')
module.exports = function (app) {

    app.get("/ping", (req, res) => res.send("pong"))

    app.use('/api/category', categoryRouter)
    app.use('/api/products', productRouter)
    app.use('/api/order', orderRouter)
}