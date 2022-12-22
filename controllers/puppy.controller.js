import PuppyModel from "../models/puppy.model.js";
// // import FemaleModel from "../models/females.model.js";
// // import MaleModel from "../models/males.model.js";


// // FemaleModel.hasMany(PuppyModel);
// // MaleModel.hasMany(PuppyModel);

import express from "express";
class PuppyController {
    list = async (req, res) => {
        const result = await PuppyModel.findAll({
            attributes: ['id', 'images', 'createdAt', 'updatedAt'],
            order: ['id'],
            limit: 100
        })
        res.json(result)
    }
    details = async (req, res) => {
        const idss = req.query.id;
       
        const { id } = req.params || 0
        const result = await PuppyModel.findOne({
            attributes: ['images'],
            where: { id: id }
        })
        console.log(result);
        res.send(`<img src="${result}" alt="">`)
    }

    create = async (req, res) => {
        const { id, name, images, mom_id, dad_id, birthday } = req.body;
        console.log(req.body);
         if (name && images && mom_id && dad_id) {
             const model = await PuppyModel.create(req.body)
             return res.json({ newId: model.id })
         } else {
             res.sendStatus(418)
         }
    }

    update = async (req, res) => {
        const { id, title, disc, rating, price, categoryId } = req.body;
        PuppyModel.update(
            { title: title,  disc: disc, rating: rating, price: price, categoryId: categoryId},
            { where: { id: id } }
          )
          if (title || disc || rating || price || categoryId) {
            console.log(id);
            res.sendStatus(200)
          }
    }

    delete = async (req,res) => {
        const { id } = req.body;
        PuppyModel.destroy({
            where: {
                id: id
            }
            
        })
        res.sendStatus(200)
    }
}
export default PuppyController