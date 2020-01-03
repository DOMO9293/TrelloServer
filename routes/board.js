const express = require("express");
const router = express.Router();

const boardControl = require("./../controllers/boards");

// 회원별 재고 목록 조회
router.get("/", boardControl.userBoards);

/* // 전체 재고 목록 조회
router.get("/all", boardControl.boardAll);

// 재고 검색 자동완성
router.get("/:keyword", ingControl.search);

// 회원별 재고 추가
router.post("/addBoard", boardControl.addBoard);

// 회원별 재고량 수정
router.post("/quantity", ingControl.modifyQuantity);

// 회원별 재고량 삭제
router.post("/delete", ingControl.deleteItem);
 */
module.exports = router;
