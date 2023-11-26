const User = require("../../../models/User")

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}

module.exports = getUsers;