const db = require('./db')
const User = require('./models/User')

const users = [
  {
    username: "BagginsF",
    firstName: "Frodo",
    lastName: "Baggins",
    email: "BagginsF@lotr.me",
    password: 'password',
  },
  {
    username: "GamgeeS",
    firstName: "Samwise",
    lastName: "Gamgee",
    email: "GamgeeS@lotr.me",
    password: 'password',
  },
  {
    username: "TheGreyG",
    firstName: "Gandalf",
    lastName: "TheGrey",
    email: "Gandalf@lotr.me",
    password: 'password',
  }
]

const syncAndSeed = async () => {
  try {
  await db.sync({force: true});
  
  await Promise.all(users.map(user => User.create(user)));
 
  console.log("DB Sync!");
  } catch (error) {
  console.error("There was a problem seeding the database", error);
  }
};


module.exports = {
  db,
  syncAndSeed,
  User
}