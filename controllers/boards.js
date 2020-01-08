const express = require("express");
const { Board } = require("../models");
const auth = require("./../middleware/auth");

module.exports = {
  // 유저별 보드 조회
  userBoard: (req, res) => {
    auth(req, res, () => {
      Board.findAll({
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
  addBoard: (req, res) => {
    auth(req, res, () => {
      Board.create({
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
  deleteBoard: (req, res) => {
    auth(req, res, () => {
      Board.destroy({
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
