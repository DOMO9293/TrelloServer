const express = require("express");
const router = express.Router();

const listControl = require("./../controllers/lists");

// 회원별 리스트 목록 조회
router.get("/", listControl.userLists);

//회원별 리스트 추가
router.post("/addItem", listControl.addList);

//회원별 리스트 삭제
router.post("/delete", listControl.deleteList);

//회원별 할일 추가
router.post("/:listId/addItem", listControl.addTodo);

//회원별 할일 체크/체크해제

//회원별 할일 삭제
router.post("/:listId/delete", listControl.deleteTodo);

module.exports = router;
