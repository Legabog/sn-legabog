const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const myOwnPlayListsSchema = require("../models/MyOwnPlaylists");

// -----------------Create My Own PlayList

router.route("/create-playlist").post((req, res, next) => {
  myOwnPlayListsSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// ------------------ READ My Own PlayLists

router.route("/get-playlists").get((req, res) => {
  myOwnPlayListsSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// ----------------- Get single playlist by id

router.route("/edit-playlist/:id").get((req, res) => {
  myOwnPlayListsSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// ------------------ Update PlayList

router.route("/update-playlist/:id").put((req, res, next) => {
  myOwnPlayListsSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("PlayList updated successfully !");
      }
    }
  );
});

// Delete Playlist
router.route("/delete-playlist/:id").delete((req, res, next) => {
  myOwnPlayListsSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

// Delete Track by id
router
  .route("/delete-playlist/:pid/delete-track/:id")
  .delete((req, res, next) => {
    // myOwnPlayListsSchema.update(
    //   {},
    //   { $pull: { "tracks._id": req.params.id } },
    //   { multi: true }
    // );

    myOwnPlayListsSchema.findByIdAndUpdate(
      req.params.pid,
      { $pull: { tracks: { _id: req.params.id } } },
      function (err, data) {
        if (err) {
          return handleError(res, err);
        }
        return res.status(200).json(data.tracks);
      }
    );

    console.log(req.params);
  });

module.exports = router;
