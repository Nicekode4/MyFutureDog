import express from "express";
import PuppyController from '../controllers/puppy.controller.js'

const PuppyRouter = express.Router()
const controller = new PuppyController()

PuppyRouter.get('/puppy', (req,res) => { 
    controller.list(req,res)
 })

 PuppyRouter.get('/puppy/:id([0-9]*)', (req,res) => { 
    controller.details(req,res)
 })

 PuppyRouter.post('/puppy', (req,res) => { 
   controller.create(req,res)
})

PuppyRouter.put('/puppy', (req,res) => { 
   controller.update(req,res)
})

PuppyRouter.delete('/puppy', (req,res) => { 
   controller.delete(req,res)
})


export default PuppyRouter