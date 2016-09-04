var express = require('express');
var router = express.Router();
var userModel = require('../models/userprofile.js');
require('mongoose-query-paginate');
var q = require('q');





var user = {

    getUsers: function (req, res) {
        var options = {
            perPage: parseInt(req.query.limit) || 10,
            page: parseInt(req.query.page) || 1,
            sortBy: req.query.sortBy || 'userName',
            userName: req.query.userName || "",
            firstName: req.query.firstName || "",
            lastName: req.query.lastName || "",
            email: req.query.email || "",
            roleCode: req.query.roleCode || "",
            city: req.query.city || "",
            address: req.query.address || "",
            mobileNo: parseInt(req.query.mobileNo) || "",
            userActive: Boolean(req.query.userActive) || ""
        };



        var query = userModel.find({

            $or: [{
                "userName": { '$regex': options.userName, $options: 'i' },
                "firstName": { '$regex': options.firstName, $options: 'i' },
                "lastName": { '$regex': options.lastName, $options: 'i' },
                "email": { '$regex': options.email, $options: 'i' },
                "roleCode": { '$regex': options.roleCode, $options: 'i' },
                "city": { '$regex': options.city, $options: 'i' },
                "address": { '$regex': options.address, $options: 'i' },
                "userActive": { '$nin': options.userActive },
                //"mobileNo":NumberInt(options.mobileNo)

            }]

        }).sort(options.sortBy);
        query.paginate(options, function (err, result) {
            res.json(result);
        });

    },

    createUser: function (req, res) {
        var userObject = new userModel({
            userName: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address,
            mobileNo: req.body.mobileNo,
           

        })

    

        userObject.save(function (err) {
            if (err) return err;
            res.status(201);
            return res.json({
                "status": 200,
                "success": true,
                "message": "User saved Successfully",
            });
        });
    },

    deleteUser: function (req, res) {
        var id = req.params.id;
        userModel.findByIdAndUpdate(id, { 'markDelete': true }, function (result) {
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


module.exports = user;

