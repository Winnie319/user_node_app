const user = require("../models/user")

async function getAllUsers(req, res){
    try {
      const users = await user.find({});
      res.status(200).json(users);
    } catch (error) {
      console.log('cant get users: ', error.message);
      res.status(401).json({error: error.message});
    }
  }

async function postUser(req, res){
  try {

const body = req.body;
const first_name = body.first_name;
const last_name = body.last_name;
const school = body.school;
const date_of_birth = Date(body.date_of_birth);


    const newUser = await user.create({
      first_name,
	  last_name,
	  school,
      date_of_birth
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log('cant add data: ', error.message);
    res.status(401).json({message: 'Cant add data'});
  }  
};




module.exports = {getAllUsers,postUser};