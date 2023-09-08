const express = require('express');
const { login , register , logout ,getMyDetail , deleteUser } = require('../controllers/appController')
const isAuthenticated = require('../middlewares/auth');
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuthenticated,getMyDetail);
router.get("/logout", logout);
router.route("/:id").delete(deleteUser);


module.exports = router;