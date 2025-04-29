const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroControllers');

router.get('/', heroController.getAllHeroes);
router.get("/:id", heroController.getHeroById);
router.post("/", heroController.createHero);

module.exports = router;