const { Category } = require('../models')

exports.create = async (req, res) => {
    try {
        const { category_name, category_desc } = req.body
        if (!category_name) {
            return res.status(400).json({ message: "Missing category_name" })
        }
        const category = await Category.create({ category_name, category_desc })
        res.status(201).json(category)
    } catch (error) {
        res.status(500).json({ message: "Error creating category", error: error.message })
    }
}

exports.findAll = async (req, res) => {
    try {
        const categories = await Category.findAll()
        res.json(categories)
    } catch (error) {
        res.status(500).json({ message: "Error retrieving categories", error: error.message })
    }
}

exports.findOne = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.category_id)
        if (!category) {
            return res.status(404).json({ message: "Category not found" })
        }
        res.json(category)
    } catch (error) {
        res.status(500).json({ message: "Error retrieving category", error: error.message })
    }
}

exports.update = async (req, res) => {
    try {
        const [updated] = await Category.update(req.body, {
            where: { category_id: req.params.category_id }
        })
        if (updated) {
            const updatedCategory = await Category.findByPk(req.params.category_id)
            return res.json(updatedCategory)
        }
        throw new Error('Category not found')
    } catch (error) {
        res.status(500).json({ message: "Error updating category", error: error.message })
    }
}

exports.delete = async (req, res) => {
    try {
        const deleted = await Category.destroy({
            where: { category_id: req.params.category_id }
        })
        if (deleted) {
            return res.status(204).send()
        }
        throw new Error('Category not found')
    } catch (error) {
        res.status(500).json({ message: "Error deleting category", error: error.message })
    }
}

