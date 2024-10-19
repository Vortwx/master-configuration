const db = require('./models');
const User = db.User;
const Category = db.Category;
const Spending = db.Spending;

async function seedData() {
  try {
    // Check if categories already exist
    const categoryCount = await Category.count();
    if (categoryCount > 0) {
      console.log(`${categoryCount} categories already exist. Skipping category creation.`);
    } else {
      // Create default categories
      const categories = await Category.bulkCreate([
        { category_name: 'Food' },
        { category_name: 'Transportation' },
        { category_name: 'Entertainment' },
        { category_name: 'Utilities' },
        { category_name: 'Shopping' },
        { category_name: 'Healthcare' },
        { category_name: 'Education' },
        { category_name: 'Travel' }
      ]);
      console.log(`${categories.length} default categories have been created.`);
    }}
    catch (error) {
        console.error('Error seeding data:', error);
    }
}

seedData();