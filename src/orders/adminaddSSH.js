const { OrderVPN } = require ("../db")
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;
async function addingSSHonOrder(req,res){
    const { getSSH,orderID } = req.body;
const inputSSH = await OrderVPN.update({ SSHpass: getSSH }, {
    where: {
      id: orderID
    }
  });
  return res.json(inputSSH);

}
module.exports = {addingSSHonOrder}