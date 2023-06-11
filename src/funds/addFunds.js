const { FundsData } = require ("../db")

async function addFundsManually (req, res) {
    const { user, moneyAdd} = req.body;

    const addFundsManuallyData = await FundsData.create({
        user,
        moneyAdd
    });
    return res.json(addFundsManuallyData);
}
module.exports = {addFundsManually}

