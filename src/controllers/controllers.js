//*call services file
const services  = require('../services/services');

const create  = services;


//*get index file controller
exports.getIndex = async (req, res) => {
    try {
        res.render('index',{'title':'Express Project Skeleton'});
    } catch (error) {
        throw new Error(error.message);
    }
}

//*Post user login controller
exports.postLogin = async (req, res, next) => {
    try {
       await create.loginuser(req.body);
    } catch(e) {
        throw new Error(e.message);
    }
  }

//*destroy session controller
exports.deleteLogout = async (req, res, next) => {
    try {
        await create.deletesession(req);
        res.redirect('/apiGet/login');
    } catch(e) {
        throw new Error(e.message);
    }
}