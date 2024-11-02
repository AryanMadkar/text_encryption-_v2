const express = require("express");
const { register, login } = require("../controllers/REgister.controller");
const {
  encrypt,
  dcrypt,
  fileEncrypt,
  fileDecrypt,
} = require("../controllers/maintext.controller");
const router = express.Router();

// GET request to retrieve all users

router.post("/register", register);
router.post("/login", login);
router.post("/encrypt", encrypt);
router.post("/decrypt", dcrypt);
router.post("/fileencrypt", fileEncrypt);
router.post("/filedecrypt", fileDecrypt);
module.exports = router;
