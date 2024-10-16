const express = require('express');
const db = require('./models');

const app = express();
const PORT = 3000;
app.use(express.json());


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.get('/', (req,res)=>{
    res.send("Hello World");
})