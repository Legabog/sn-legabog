const mongoose = require("mongoose")
const express = require("express")
const router = express.Router()

const musicalbumsSchema = require("../models/Musicalbums")

// -----------------Create Album

router.route("/create-musicalbum").post((req, res, next) => {
    musicalbumsSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
})


// ------------------ READ ALBUMS

router.route("/get-musicalbums").get((req, res) => {
    musicalbumsSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// ----------------- Get single album

router.route("/edit-album/:id").get((req, res) => {
    musicalbumsSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// ------------------ Update Album

router.route('/update-album/:id').put((req, res, next) => {
    musicalbumsSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Album updated successfully !')
      }
    })
  })
  
  // Delete Student
  router.route('/delete-album/:id').delete((req, res, next) => {
    musicalbumsSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

  module.exports = router