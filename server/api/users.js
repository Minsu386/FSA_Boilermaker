const router = require('express').Router()
// ToDO: add db


router.get('/', async(req, res, next)=> {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ['password']
      }
    });
    res.send(users);
  }
  catch(ex){
    next(ex);
  }
});



module.exports = router