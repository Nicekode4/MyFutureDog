import PuppyModel from "../models/puppy.model.js";
import FemaleModel from "../models/females.model.js";
import MaleModel from "../models/males.model.js";
import express from "express";

FemaleModel.hasMany(PuppyModel);
MaleModel.hasMany(PuppyModel);
class PuppyController {
    list = async (req, res) => {
        const result = await PuppyModel.findAll({
            attributes: ['id', 'image', 'createdAt', 'updatedAt'],
            order: ['id'],
            limit: 100
        })
        res.json(result)
    }
    details = async (req, res) => {
        const idss = req.query.id;
        console.log(idss);
        const { id } = req.params || 0
        const result = await PuppyModel.findOne({
            //attributes: ['id', 'title', 'rating', 'price', 'categoryId'],
            where: { id: id }
        })
        res.json(result)
    }

    create = async (req, res) => {
        const { id, title, disc, rating, price, categoryId } = req.body;
        console.log(title);
        if (title && disc && price && categoryId) {
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