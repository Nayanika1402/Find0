const express = require('express');
const { login , register , logout ,getMyDetail , deleteUser , createInternships , getInternships , getHackathon , createHackathon} = require('../controllers/appController')
const isAuthenticated = require('../middlewares/auth');
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuthenticated,getMyDetail);
router.get("/logout", logout);
router.route("/:id").delete(deleteUser);

router.post("/createInternships", createInternships);
router.get("/internships", getInternships);


router.post("/hackathons", createHackathon);
router.get("/hackathons", getHackathon);




module.exports = router;