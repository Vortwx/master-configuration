const spending = require('../models/spending.js');
const { Spending } = require('../models/spending.js');

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
        const { spending_amount, spending_date, spending_desc } = req.body;
        if (!spending_amount || !spending_date) {
            return res.status(400).json({ message: "Missing spending_amount or spending_date"})
        }
        const spending = await Spending.create({ spending_amount, spending_date, spending_desc})
        // 200 with content
        res.status(201).json(spending)
    } catch (error) {
        res.status(500).json({ message: "Error creating spending record", error: error.message })
    }
}

exports.findAll = async (req, res) => {
    try {
      const spendings = await Spending.findAll()
      res.json(spendings)
    } catch (error) {
      res.status(500).json({ message: "Error retrieving spending records", error: error.message })
    }
  };
  
  exports.findOne = async (req, res) => {
    try {
      const spending = await Spending.findByPk(req.params.spending_id)
      if (!spending) {
        return res.status(404).json({ message: "Spending record not found" })
      }
      res.json(spending)
    } catch (error) {
      res.status(500).json({ message: "Error retrieving spending record", error: error.message })
    }
  };
  
  exports.update = async (req, res) => {
    try {
      const [updated] = await Spending.update(req.body, {
        where: { spending_id: req.params.spending_id }
      });
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
      });
      if (deleted) {
        // Ok with no content
        return res.status(204).send()
      }
      throw new Error('Spending record not found')
    } catch (error) {
      res.status(500).json({ message: "Error deleting spending record", error: error.message })
    }
  }