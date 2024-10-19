const db = require('../models')
const Spending = db.Spending
console.log('Is Spending a Sequelize model?', Spending instanceof db.Sequelize.Model)

/*
CREATE
READ ALL
READ ONE
UPDATE
DELETE

1. Validate input
2. Check for error
3. Normal case

200 OK
201 OK and created as result
204 OK and no content
400 Bad Request
404 Not found
500 Internal Server Error

*/

exports.create = async (req, res) => {
  try {
      const { spending_amount, spending_date, spending_desc, user_id, category_id } = req.body
      
      // Validate input
      // 1. Check spending_amount
      if (!spending_amount) {
          return res.status(400).json({ message: "Missing spending amount" });
      }
      
      // 2. Check spending_date
      if (!spending_date) {
          return res.status(400).json({ message: "Missing spending date" });
      }
      
      // 3. Check user_id
      if (!user_id) {
          return res.status(400).json({ message: "Missing user ID" });
      }
      
      // 4. Check category_id
      if (!category_id) {
          return res.status(400).json({ message: "Missing category ID" });
      }
      
      // Create spending record
      const spending = await Spending.create({
          spending_amount,
          spending_date,
          spending_desc,
          user_id,
          category_id
      })
      
      // 201 Created
      res.status(201).json(spending)
  } catch (error) {
      res.status(500).json({ message: "Error creating spending record", error: error.message })
  }
}

exports.findAll = async (req, res) => {
  try {
      const spendings = await Spending.findAll({
          include: [
              { model: db.User, as: 'user' },
              { model: db.Category, as: 'category' }
          ]
      })
      res.json(spendings)
  } catch (error) {
      res.status(500).json({ message: "Error retrieving spending records", error: error.message })
  }
}

exports.findOne = async (req, res) => {
  try {
    const spending_id = req.params.spending_id;
    console.log('Received spending_id:', spending_id);
      const spending = await Spending.findByPk(req.params.spending_id, {
          include: [
              { model: db.User, as: 'user' },
              { model: db.Category, as: 'category' }
          ]
      })
      if (!spending) {
          return res.status(404).json({ message: `Spending record not found ${spending}` })
      }
      res.json(spending)
  } catch (error) {
      res.status(500).json({ message: "Error retrieving spending record", error: error.message })
  }
}
  
exports.update = async (req, res) => {
  try {
    console.log(req.body)
    const [updated] = await Spending.update(req.body, {
      where: { spending_id: req.params.spending_id }
    });
    console.log(updated)
    if (updated) {
      const updatedSpending = await Spending.findByPk(req.params.spending_id)
      return res.json(updatedSpending)
    }
    throw new Error('Spending record not found')
  } catch (error) {
    res.status(500).json({ message: "Error updating spending record", error: error.message })
  }
};
  
  exports.delete = async (req, res) => {
    try {
      const deleted = await Spending.destroy({
        where: { spending_id: req.params.spending_id }
      })
      if (deleted) {
        // Ok with no content
        console.log("Record deleted")
        return res.status(204).send()
      }
      throw new Error('Spending record not found')
    } catch (error) {
      res.status(500).json({ message: "Error deleting spending record", error: error.message })
    }
  }