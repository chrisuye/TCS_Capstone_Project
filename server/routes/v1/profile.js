const express = require("express");
const users = require("../../controllers/users");

const router = express.Router();

router.get("/getUser/:userName",users.getUserByUsername)
router.put("/updateuser/:id", users.updateUser);

module.exports = router;