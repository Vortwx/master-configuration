const db = require('./models');
const Spending = db.Spending;

// Example usage of create method
async function createSpending(spendingData) {
    try {
        const newSpending = await Spending.create(spendingData);
        console.log('New spending created:', newSpending.toJSON());
        return newSpending;
    } catch (error) {
        console.error('Error creating spending:', error);
        throw error;
    }
}

// Test the create method
const testSpendingData = {
    spending_amount: 100,
    spending_date: new Date(),
    spending_desc: 'Test spending',
    user_id: 1,
    category_id: 1  // Assuming you have a category with id 1
};

createSpending(testSpendingData);