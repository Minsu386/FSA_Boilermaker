const router = require('express').Router()
const {User} = require('../db')


router.get('/', async(req, res, next)=> {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ['password']
      }
    });
    res.json(users);
  }
  catch(ex){
    next(ex);
  }
});



module.exports = router