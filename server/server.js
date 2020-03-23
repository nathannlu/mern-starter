const mongoose = require('mongoose');
const app = require('./app')

// Connect the database
// using connection string from config.env
const database = process.env.DATABASE;
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(
  async connection => {
    console.log('Database loaded and connected.')
  }
)

const port = process.env.PORT

// Start the server 
app.listen(port, () => {
  console.log('Server loaded.')
})