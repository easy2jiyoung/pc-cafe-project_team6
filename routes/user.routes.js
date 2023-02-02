const express = require("express");
const auth_middlewares = require("../middlewares/auth-middlewares");
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser, login } = require("../controllers/user.controller");
const {Users} = require('../models/index.js')
const { Op } = require("sequelize");



router.get('/points/:userId',getUserPoints = async (req,res)=>{

   const users = await Users.findAll()
   console.log(users)
})

module.exports = router;