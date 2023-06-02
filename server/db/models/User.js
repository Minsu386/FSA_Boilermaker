const db = require('../db')
const Sequelize = require('sequelize')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User =db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  }
})

User.prototype.generateToken = function(){
  return jwt.sign({ id: this.id}, process.env.JWT);
}

User.findByToken = async function(token){
  const { id } = jwt.verify(token, process.env.JWT);
  const user = await User.findByPk(id);
  if(user){
    return user;
  }
  throw 'nope';
}

User.authenticate = async function({ username, password }){
  const user = await User.findOne({
    where: {
      username
    }
  });
  if(user && await bcrypt.compare(password, user.password)){
    return user.generateToken(); 
  }

  throw 'bad credentials';
}

User.addHook('beforeSave', async(user)=> {
  user.password = await bcrypt.hash(user.password, 5);
  console.log(user.password);
});


module.exports = User;