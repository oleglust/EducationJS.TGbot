const { OrderVPN } = require ("../db")

async function createNewOrder (req, res) {
    
    const { country, period } = req.body;


    const newOrder = await OrderVPN.create({
        country,
        period
    });

    return res.json(newOrder);

}

module.exports = {createNewOrder}