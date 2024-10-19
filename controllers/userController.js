const { User } = require('../models')

exports.create = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Missing username, email, or password" })
        }
        const user = await User.create({ username, email, password })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message })
    }
}

exports.findAll = async (req, res) => {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error: error.message })
    }
}

exports.findOne = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.user_id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: "Error retrieving user", error: error.message })
    }
}

exports.update = async (req, res) => {
    try {
        const [updated] = await User.update(req.body, {
            where: { user_id: req.params.user_id }
        })
        if (updated) {
            const updatedUser = await User.findByPk(req.params.user_id)
            return res.json(updatedUser)
        }
        throw new Error('User not found')
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message })
    }
}

exports.delete = async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: { user_id: req.params.user_id }
        })
        if (deleted) {
            return res.status(204).send()
        }
        throw new Error('User not found')
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message })
    }
}

