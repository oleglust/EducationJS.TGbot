const {createNewOrder}=require("./create");
const {addingSSHonOrder}=require("./adminaddSSH");
const {userRecieveSSH}=require("./recieve");
const {deleteUselessOrder}=require("./deleteorder");

module.exports ={ createNewOrder,addingSSHonOrder,userRecieveSSH,deleteUselessOrder }
