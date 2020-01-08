const express = require("express");
const { List, Todo } = require("../models");
const auth = require("./../middleware/auth");

module.exports = {
  // 유저별 보드 조회
  userLists: (req, res) => {
    auth(req, res, () => {
      List.findAll({
        where: { userId: req.decoded.userId },
        attributes: ["board_name", "createdAt", "userId"]
      })
        .then(data => {
          console.log("보드", data);

          return data;
        })
        .then(data => {
          res.status(200).json(data);
        });
    });
  },
  addList: (req, res) => {
    auth(req, res, () => {
      List.create({
        userId: req.body.userId,
        board_name: req.body.board_name
      })
        .then(result => {
          res.status(201).json(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    });
  },
  deleteList: (req, res) => {
    auth(req, res, () => {
      List.destroy({
        where: {
          board_name: req.body.board_name
        }
      })
        .then(result => {
          res.status(201).json(result);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    });
  }
};
