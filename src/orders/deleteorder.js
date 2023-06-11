const { OrderVPN } = require ("../db");

async function deleteUselessOrder (req, res) {
  const  { id }  = req.body;

  const cancelOrderNow = await OrderVPN.destroy({
      where: {
        id: id
      }    
  })

  return res.json({ status: cancelOrderNow});
};

module.exports = {deleteUselessOrder}
