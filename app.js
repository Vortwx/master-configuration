const express = require('express');
const db = require('./models');
const bodyParser = require('body-parser');
const cors = require('cors');
const spendingRoute = require('./routes/spendingRoute');
const categoryRoute = require('./routes/categoryRoute');
const userRoute = require('./routes/userRoute');
const userController = require('./controllers/userController');
const spendingController = require('./controllers/spendingController');
const categoryController = require('./controllers/categoryController');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const PORT = 3000;
app.use(express.json());
app.use('/api/spendings', spendingRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/users', userRoute);


db.sequelize.sync().then(async () => {
  console.log('Database synced');
  await require('./seedData')
  return userController.createDefaultUser();
}).then(() => {
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error starting server:', error);
});

app.get('/', (req,res)=>{
    res.send("Hello World");
})