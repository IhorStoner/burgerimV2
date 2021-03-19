const { Router } = require('express');
const AdminModel = require('../models/AdminModel');

const adminRouter = Router();

adminRouter.post('/auth', async (req,res) => {
  const { login, password } = req.body;

  const user = await AdminModel.findOne({ login }, '+password')
  if(!user){
    return res.status(401).send({error: 'User is not found'})
  }

  const token = await user.auth(password)

  if(token) {
    res.status(200).send({id: user.id, token})
  } else {
    res.status(401).send({error: 'Password is not correct'})
  }
})

adminRouter.post('/newAdmin', async (req,res) => {
  const {login,password} = req.body
  const admin = new AdminModel({login: login,password:password})

  try {
    const result = await admin.save();
    res.status(201).send('OK');
  } catch (e) {
    res.status(500).send({ error: 'Error:' + e });
  }
  
})

module.exports = adminRouter;