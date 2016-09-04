var express = require('express');
var router = express.Router();
var footModel = require('../models/footballer.js');
require('mongoose-query-paginate');
var q = require('q');





var footballer = {

    getPosition: function (req, res) {
        var options = {
            perPage: parseInt(req.query.limit) || 10,
            page: parseInt(req.query.page) || 1,
            order: req.query.order || 'userName',
          
        };
        var query = footModel.find({}).sort(options.order);
        query.paginate(options, function (err, result) {
            res.json(result);
        });

    },

    createPosition: function (req, res) {
        var footObject = new footModel({
          positionName : req.body.positionName
        })

    

        footObject.save(function (err) {
            if (err) return err;
            res.status(201);
            return res.json({
                "status": 200,
                "success": true,
                "message": "Foot saved Successfully",
            });
        });
    },

    deleteUser: function (req, res) {
        var id = req.params.id;
        footModel.findByIdAndUpdate(id, { 'markDelete': true }, function (result) {
            res.status(201);
            res.json({
                "status": 200,
                "message": "delete Successfully"
            })
        }, function (error) {
            console.log("error" + error);
        })
    },


}


module.exports = footballer;

