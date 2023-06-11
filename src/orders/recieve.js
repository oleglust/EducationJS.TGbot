const { OrderVPN } = require ("../db")

async function userRecieveSSH (req, res) { 
    const { id } = req.body; 
    
    const giveSSHToUser = await OrderVPN.findOne({
        where: { id : id },
        attributes: ['SSHpass'] //какие конкретно данные надо достать 
    });

    return res.json(giveSSHToUser);
}
module.exports ={userRecieveSSH}

// дописать!