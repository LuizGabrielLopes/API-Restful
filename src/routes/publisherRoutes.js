const express = require('express');
const router = express.Router();
const publisherControllers = require('../controllers/publisherControllers');

router.get('/', publisherControllers.getAllPublishers);
router.get('/:id', publisherControllers.getPublisherById);
router.post('/', publisherControllers.createPublisher);
router.put('/:id', publisherControllers.updatePublisher);
router.delete('/:id', publisherControllers.deletePublisher);

module.exports = router;