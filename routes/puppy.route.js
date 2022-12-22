import express from "express";
import PuppyController from '../controllers/product.controller.js'

const PuppyRouter = express.Router()
const controller = new PuppyController()

ProductRouter.get('/puppy', (req,res) => { 
    controller.list(req,res)
 })

 PuppyRouter.get('/puppy/:id([0-9]*)', (req,res) => { 
    controller.details(req,res)
 })

 PuppyRouter.post('/puppy', (req,res) => { 
   controller.create(req,res)
})

ProductRouter.put('/puppy', (req,res) => { 
   controller.update(req,res)
})

ProductRouter.delete('/puppy', (req,res) => { 
   controller.delete(req,res)
})


export default PuppyRouter