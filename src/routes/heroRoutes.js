const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroControllers');
const apiKeyMiddleware = require("../config/apiKey");
const upload = require("../config/upload");

router.use(apiKeyMiddleware);

router.get('/', heroController.getAllHeroes);
router.get("/:id", heroController.getHeroById);
router.post("/", upload.single("photo"), heroController.createHero);
router.put("/:id", heroController.updateHero);
router.delete("/:id", heroController.deleteHero)

module.exports = router;