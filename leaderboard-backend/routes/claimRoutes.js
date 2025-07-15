const express = require("express");
const { claimPoints, getHistory } = require("../controllers/claimController");
const router = express.Router();

router.post("/:userId", claimPoints);
router.get("/history", getHistory);

module.exports = router;
