const express = require("express");
const router = express.Router();

const boardControl = require("./../controllers/boards");

// 회원별 보드 목록 조회
router.get("/", boardControl.userBoard);

//회원별 보드 추가
router.post("/addItem", boardControl.addBoard);

//회원별 보드 삭제
router.post("/delete", boardControl.deleteBoard);

module.exports = router;
