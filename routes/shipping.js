var express = require('express');
var router = express.Router();
var shippingModel = require('../models/shipping.js');
require('mongoose-query-paginate');
var q = require('q');





var shipping = {

    getShipping: function (req, res) {
        var options = {
            perPage: parseInt(req.query.limit) || 10,
            page: parseInt(req.query.page) || 1,
            order: req.query.order || 'userName',

        };
        var query = shippingModel.find({}).sort(options.order);
        query.paginate(options, function (err, result) {
            res.json(result);
        });

    },

    createShipping: function (req, res) {
        var shippingObject = new shippingModel({
            purchaseOrder: req.body.purchaseOrder,
            sourceZip: req.body.sourceZip,
            destinationZip: req.body.destinationZip,
        })



        shippingObject.save(function (err) {
            if (err) return err;
            res.status(201);
            return res.json({
                "status": 200,
                "success": true,
                "message": "Foot saved Successfully",
            });
        });
    },

    deleteShipping: function (req, res) {
        var id = req.params.id;
        shippingModel.findByIdAndUpdate(id, { 'markDelete': true }, function (result) {
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


module.exports = shipping;

